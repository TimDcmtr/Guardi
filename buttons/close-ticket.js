
module.exports = {
	id: 'close-ticket',
	permissions: [],
	run: async (client, interaction) => {
		interaction.channel.delete()

	}
};
