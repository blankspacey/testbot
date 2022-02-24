const Discord = require('discord.js');
const dotenv = require('dotenv');
const fs = require('fs');
const snoowrap = require('snoowrap');

dotenv.config();

const client = new Discord.Client({
	intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.DIRECT_MESSAGES, Discord.Intents.FLAGS.GUILD_MESSAGES],
	partials: ['CHANNEL']
});

client.prefix = 'eelon';

client.snoowrap = new snoowrap({
	userAgent: process.env.REDDITUSERAGENT,
	clientId: process.env.REDDITCLIENTID,
	clientSecret: process.env.REDDITCLIENTSECRET,
	username: process.env.REDDITUSERNAME,
	password: process.env.REDDITPASSWORD
});

client.on('ready', function() {
	console.log('bot is ready');
});

function readCommands()	{
	client.commands = new Discord.Collection();
	const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${file}`);
		client.commands.set(command.name, command);
	}
}

function registerEvents() {
	const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
	for(const file of eventFiles) {
		const event = require(`./events/${file}`);
		client.on(event.name, data => event.execute(data, client));
	}
}

registerEvents();
readCommands();

client.login(process.env.TOKEN);