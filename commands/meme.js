module.exports = {
	name: 'meme',
	minArg: 0,
	maxArgs: 0,
	execute: function(message, args, client) {
		const subreddit = client.snoowrap.getSubreddit('memesITA');
		subreddit.getRandomSubmission({ time: 'week' }).fetch().then(subInfo => {
			const messageEmbed = {
				color: 0x0099ff,
				title: subInfo.title,
				image: { url: subInfo.url }
			};
			message.reply({ embeds: [messageEmbed] });
		});

	}
};