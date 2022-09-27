const path = require('path')
require('dotenv').config({ 
    path: path.resolve(__dirname, '../.env') 
})
const { Client, GatewayIntentBits } = require('discord.js');
const {BanKewWords,SlashCommand} = require('./EventFunctions')

// Create a new client instance
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ] 
});

// When the client is ready, run this code (only once)
client.on('ready', () => {
	console.log('Logged in');
});
client.on('messageCreate', (message) => {
	SlashCommand(message)
    BanKewWords(message.content,message.author.username)
    
});

// Login to Discord with your client's token
client.login(process.env.BOT_TOKEN);