module.exports = {
	name: 'meme',
	minArg: 0,
	maxArgs: 0,
	execute: async function(message, args, client) {

		const subreddit = client.snoowrap.getSubreddit('memesITA');
		let submission = await subreddit.getRandomSubmission({ time: 'week' }).fetch();

		while(submission.post_hint != 'image') submission = await subreddit.getRandomSubmission({ time: 'week' }).fetch();

		const messageEmbed = {

			color: 0x0099ff,
			title: submission.title,
			image: { url: submission.url }

		};

		message.reply({ embeds: [messageEmbed] });

	}
};