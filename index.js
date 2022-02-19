const Discord = require('discord.js');
const dotenv = require('dotenv');
const fs = require('fs');
const prefix = 'eelon';

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.command.set(command.name, command);
}
dotenv.config();

const client = new Discord.Client({
	intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.DIRECT_MESSAGES, Discord.Intents.FLAGS.GUILD_MESSAGES],
	partials: ['CHANNEL']
});

client.on('ready', function() {
	console.log('bot is ready');
});

client.on('messageCreate', function(message) {
	if(!message.content.startsWith(prefix) || message.author.bot) return;
	const arg = message.content.slice(prefix.length).split(/\s+/);
	const command = arg.shift().toLowerCase();

	if (command === 'eelon') {
		message.channel.send('');
	}
});

client.login(process.env.TOKEN);