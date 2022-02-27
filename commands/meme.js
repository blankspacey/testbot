module.exports = {
	name: 'meme',
	minArg: 0,
	maxArgs: 0,
	execute: async function(message, args, client) {

		try {

			if (this.submission == undefined) this.submission = await getSubmission(client.snoowrap);

			const messageEmbed = {

				color: 0x0099ff,
				title: this.submission.title,
				image: { url: this.submission.url }

			};

			message.reply({ embeds: [messageEmbed] });

			this.submission = await getSubmission(client.snoowrap);

		} catch (error) {
			console.error(error);
		}

	},
	submission: undefined
};

async function getSubmission(snoowrap) {
	const subreddit = snoowrap.getSubreddit('memesITA');
	let submission = await subreddit.getRandomSubmission({ time: 'week' }).fetch();

	while (submission.post_hint != 'image' || submission.over_18) submission = await subreddit.getRandomSubmission({ time: 'week' }).fetch();
	return submission;
}