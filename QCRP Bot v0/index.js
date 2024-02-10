require('dotenv').config();
const fs = require("node:fs");
const {Client, Collection, GatewayIntentBits} = require('discord.js');

const client = new Client({intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMembers,],});

const token = process.env.CLIENT_TOKEN;
const config = require('./config.json');
client.config = config;

client.commands = new Collection();

console.log('\x1b[1m%s\x1b[0m', 'Loading Events');
const events = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
for (const file of events) {
    const eventName = file.split(".")[0];
    const event = require(`./events/${file}`);
    client.on(eventName, event.bind(null, client));
    console.log('\x1b[1m\x1b[32m%s\x1b[0m', `   ${eventName}`);
};

console.log('\x1b[1m%s\x1b[0m', `\nLoading Commands`);
const commands = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const file of commands) {
    const commandName = file.split(".")[0];
    const command = require(`./commands/${file}`);
    client.commands.set(commandName, command);
    console.log('\x1b[1m\x1b[32m%s\x1b[0m', `   ${commandName}`);
};

client.login(token);