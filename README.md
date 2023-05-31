---

# node-red-contrib-latch

`node-red-contrib-latch` is a Node-RED node that provides a latch switch functionality. It accepts boolean inputs from different topics. If a `true` is received from a topic, the output is set to high, and when a `false` is received from the same or a different topic, the output is set to low.

## 🚀 Installation

To install `node-red-contrib-latch` node, you can either use the Node-RED's built-in palette manager or via npm:

```
npm install node-red-contrib-latch
```

After installing, you may need to restart Node-RED to load the new node.

## 📖 Usage

Once installed, the "latch" node will be available in the function category of your Node-RED flow editor. This node requires an input message with a boolean payload and a topic. The transformed output can then be wired to the nodes of your choice.

## 📈 Example

Follow the steps below to utilize this node:

1. Install the node.
2. Navigate to the Node-RED flow editor.
3. Drag and drop the "latch" node from the function category into your flow.
4. Connect the "latch" node to the other nodes as required by your flow.

## 👏 Contributing

Contributions to `node-red-contrib-latch` are welcome! If you wish to contribute, please create a pull request. For substantial changes, please open an issue first to discuss your proposed changes.

## 📃 License

This project is licensed under the GPL-3.0 License. See the [LICENSE](LICENSE) file for details.

## 👤 Author

`node-red-contrib-latch` was created by Harshad Joshi. Connect with me on GitHub [@hj91](https://github.com/hj91).
