# Cyclic Counter Node for Node-RED

A customizable cyclic counter node for Node-RED that iterates through a defined sequence of numbers and can reset after a set timeout. It allows flexible control over the counter's behavior, making it useful in a variety of automation scenarios.

## Features

- Cycles through numbers from `1` to a maximum value.
- Reset the counter after a configurable timeout (Optional)
- Configurable output property for the counter value in the message.

## Installation

To install this node, you can clone it into your Node-RED node directory or install it directly from npm:

```bash
npm install node-red-contrib-cyclic-counter
```

Then restart Node-RED, and the cyclic counter will be available in the function category.

## Usage

- Maximum Count (maxCount): Sets the upper limit of the counter. The counter resets to 1 after reaching this value.
- Timeout Duration (timeoutDuration): The delay before resetting the counter back to 1. If set to 0, the counter will never automatically reset.
- Timeout Unit (timeoutUnit): Unit of time for the timeout duration (ms, s, min, hr, day).
- Output Property (outputProperty): Property in the message where the counter value will be stored (default is payload).
- To reset the counter manually, send a message with msg.payload set to "reset".

## Example Flow

Here’s an example flow to get started:

```json
[
    {
        "id": "example",
        "type": "cyclic_counter",
        "z": "your-flow-id",
        "name": "My Cyclic Counter",
        "maxCount": 5,
        "timeoutDuration": 30,
        "timeoutUnit": "s",
        "outputProperty": "payload",
        "wires": [["debug_node_id"]]
    }
]
```

This configuration will increment the counter from 1 to 5, reset it after 30 seconds of inactivity, and extend the timeout on each new input.

## License

MIT
