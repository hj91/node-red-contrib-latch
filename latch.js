/**

 Copyright 2023 Bufferstack.IO Analytics Technology LLP, Pune

 Licensed under the GNU General Public License, Version 3.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 https://www.gnu.org/licenses/gpl-3.0.html

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 **/

// Harshad Joshi, 31-05-2023, Pune


module.exports = function(RED) {
    // Define the new Node-RED node "LatchNode"
    function LatchNode(config) {
        // Call the base class constructor, passing in the configuration object specific to this node
        RED.nodes.createNode(this, config);

        // Store the current node context for later reference
        var node = this;

        // Initialize an empty state object to hold the latest payload for each topic
        this.topicState = {};

        // Define what happens when an input message is received
        this.on('input', function(msg) {
            // If the topic of the incoming message already exists in our state object
            // OR the payload is a boolean type (i.e., true or false)
            // then proceed with processing
            if(msg.topic in node.topicState || typeof msg.payload === 'boolean') {
                // Update the state of this topic with the payload of the incoming message
                node.topicState[msg.topic] = msg.payload;

                // Set the payload of the message to the current state of this topic
                msg.payload = node.topicState[msg.topic];

                // Send the updated message object along the flow
                node.send(msg);

                // Update the status below the node in the flow editor
                // If payload is true, status will be green and show 'ON', otherwise it will be red and show 'OFF'
                node.status({fill: msg.payload ? "green" : "red", shape:"dot", text: msg.payload ? "ON" : "OFF"});
            }
        });
    }

    // Register the new node under the name "latch"
    RED.nodes.registerType("latch", LatchNode);
}

