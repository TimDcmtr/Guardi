const { ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType, ButtonStyle } = require('discord.js');

module.exports = {
	id: 'darckphoenix',
	permissions: [],
	run: async (client, interaction) => {
		const components = []
		components.push(
			new ButtonBuilder()
				.setCustomId('darckphoenix')
				.setLabel('SPAM CLICK !!')
				.setStyle(ButtonStyle.Danger)
		)


		const row = new ActionRowBuilder()
			.addComponents(components);

		interaction.reply({ content: 'CLIQUE ENCORE ! <@718851445406826557>', components: [row] })
		interaction.guild.channels.cache.get('1468948025337446444').send({ content: `<@${interaction.user.id}>` })

	}
};
