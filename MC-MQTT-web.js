// Generate a new random MQTT client id on each page load
var MQTT_CLIENT_ID = "iot_web_"+Math.floor((1 + Math.random()) * 0x10000000000).toString(16);

// Create a MQTT client instance
var MQTT_CLIENT = new Paho.MQTT.Client("aether3.zcu.cz", 9001, "/ws", MQTT_CLIENT_ID);

// Tell the client instance to connect to the MQTT broker
MQTT_CLIENT.connect();

// This is the function which handles button clicks
function mySendMessage() {
  // get text to send from input box
  var messageText = document.getElementById("myMessageToSend").value;

  var messageColor = document.getElementById("color").value;
  messageText = messageText + '","color":"' + messageColor;
  // create a new MQTT message with a specific payload
  var mqttMessage = new Paho.MQTT.Message(messageText);

  // Set the topic it should be published to
  mqttMessage.destinationName = "PI1/SendMessage";

  // Publish the message
  MQTT_CLIENT.send(mqttMessage);
}


