const config = {
    // Obtain apiKey from your Dashboard. fill in botUsername and streamerUsername.
    apiKey: `API_KEY_FROM_DEVELOPER_DASHBOARD`,
    botUsername: `botaccountusername`,
    streamerUsername: `streamerusername`,

    // Do not modify this.
    socketEndpoint: `wss://chatsocket.throwdown.tv`,

    settings: {
        startupMessage: true
    }
}

module.exports = config;