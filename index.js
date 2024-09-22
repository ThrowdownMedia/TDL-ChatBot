const config = require(`./config/config.js`)
const io = require(`socket.io-client`);

const socket = io(config.socketEndpoint);
console.log(`Attempting to connect Throwdown Live Chat Service`);

// DO NOT CHANGE ANYTHING HERE!
socket.emit(`connectToChat`, config.botUsername, config.apiKey, config.streamerUsername, true);

// Boot message.
if (config.settings.startupMessage) socket.emit(`chatMessage`, `TDL Chatbot service connected to chat!`, true); 

// Send message function, do not modify, or it will break.
const sendMessage = (message) => {
    socket.emit(`chatMessage`, message, true);
};

socket.on(`handshake`, () => { 
    console.log(`Socket handshake recieved from remote server.`);
    // Chat listener
    socket.on(`chatMessage`, data => {
        // Debug
        console.log(data.message);

        // Return if the chat message is from self.
        if (data.username === config.botUsername) return;

        // Respond if message (any case) is "ping"
        if (data.message.toLowerCase() === `ping`) {
            // Debug
            console.log(`Ping message recieved.`);
            sendMessage(`Pong \`smile\``);
            return;
        }
    });
});
