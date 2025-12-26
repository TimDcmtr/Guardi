
module.exports = {
	id: 'verif',
	permissions: [],
	run: async (client, interaction) => {
		interaction.member.roles.add(['1435275464707932407']);
		interaction.reply({ content: `✅ ${interaction.user}, vous avez bien rejoint le discord !`, ephemeral: true })
	}
};
