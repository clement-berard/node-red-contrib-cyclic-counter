module.exports = function (RED) {
    function CyclicCounterNode(config) {
        RED.nodes.createNode(this, config);
        const node = this;

        let maxCount = parseInt(config.maxCount) || 3;
        let timeoutDuration = parseInt(config.timeoutDuration) || 0;
        let timeoutUnit = config.timeoutUnit || "ms";
        let extendTimeout = config.extendTimeout || true;
        let outputProperty = config.outputProperty || "payload";

        let counter = 1;
        let timeout = null;

        const unitMultipliers = {
            ms: 1,
            s: 1000,
            min: 60000,
            hr: 3600000,
            day: 86400000
        };
        const delayMs = timeoutDuration * (unitMultipliers[timeoutUnit] || 1);

        const resetCounter = () => {
            counter = 1;
        };

        node.on("input", (msg) => {
            msg[outputProperty] = counter;
            node.send(msg);

            counter = (counter % maxCount) + 1;

            if (timeout) clearTimeout(timeout);
            if (delayMs > 0) {
                timeout = setTimeout(resetCounter, delayMs);
            }
        });

        node.on("close", () => {
            if (timeout) clearTimeout(timeout);
        });
    }

    RED.nodes.registerType("cyclic counter", CyclicCounterNode);
};
