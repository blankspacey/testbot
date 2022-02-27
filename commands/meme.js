module.exports = {
	name: 'meme',
	minArg: 0,
	maxArgs: 0,
	execute: async function(message, args, client) {

		try {
			const subreddit = client.snoowrap.getSubreddit('memesITA');

			if (client.submission == undefined) {

				client.submission = await subreddit.getRandomSubmission({ time: 'week' }).fetch();
				while (client.submission.post_hint != 'image' || client.submission.over_18) client.submission = await subreddit.getRandomSubmission({ time: 'week' }).fetch();

			}

			const messageEmbed = {

				color: 0x0099ff,
				title: client.submission.title,
				image: { url: client.submission.url }

			};

			message.reply({ embeds: [messageEmbed] });

			client.submission = await subreddit.getRandomSubmission({ time: 'week' }).fetch();

			while (client.submission.post_hint != 'image' || client.submission.over_18) client.submission = await subreddit.getRandomSubmission({ time: 'week' }).fetch();
		} catch (error) {
			console.error(error);
		}

	}
};