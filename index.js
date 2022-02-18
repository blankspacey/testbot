const Discord = require('discord.js');

const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.DIRECT_MESSAGES, Discord.Intents.FLAGS.GUILD_MESSAGES], partials: ['CHANNEL'] });

client.on('ready', function() {
	console.log('bot is ready');
});

client.on('messageCreate', function(message) {
	if (message.author.bot) return;
	message.reply('eelon musck is listening');
	message.author.send('eelon musck says hi');
});

client.login('OTI3NjAzMjgxMzczNTY5MDU0.YdMn4A.b_gOnIfWB8JGXkeHg4YvQSqnSeE');