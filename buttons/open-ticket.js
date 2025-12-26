const { ChannelType, PermissionFlagsBits, EmbedBuilder, ButtonStyle, ButtonBuilder, ActionRowBuilder } = require("discord.js");

module.exports = {
	id: 'open-ticket',
	permissions: [],
	run: async (client, interaction) => {
		if (interaction.guild.channels.cache.find(c => c.name == interaction.user.username)) {
			return interaction.reply({ content: "Vous avez déjà un ticket ouvert.", ephemeral: true })
		}

		interaction.guild.channels.create({
			name: `${interaction.user.username}`,
			type: ChannelType.GuildText,
			parent: '1421871686059425882',
			permissionOverwrites: [
				{
					id: interaction.user.id,
					allow: [PermissionFlagsBits.ViewChannel],
				},
				{
					id: "1421524017688477888",
					allow: [PermissionFlagsBits.ViewChannel],
				},
				{
					id: "1421522777948819619",
					deny: [PermissionFlagsBits.ViewChannel],
				},
			],
		})
			.then(c => {
				interaction.reply({ content: `Le ticket a était ouvert: <#${c.id}> !`, ephemeral: true })

				const components = [];

				components.push(
					new ButtonBuilder()
						.setCustomId("close-ticket")
						.setLabel("Fermer le ticket")
						.setStyle(ButtonStyle.Danger)
				)


				const row = new ActionRowBuilder()
					.addComponents(components);

				const embed = new EmbedBuilder()
					.setTitle("Ticket")
					.setDescription(`
						> **Bienvenue sur votre canal de support dédié.**

Ce canal est **privé et confidentiel**. Seuls vous et les administrateur du serveur.

Afin de traiter votre demande le plus efficacement possible, merci de nous fournir un maximum de détails :

- Description de votre besoin ou de l'incident.
- Contexte de l'opération (si applicable).
- Toute capture d'écran ou message d'erreur pertinent.

> __Un membre de l'équipe va vous répondre dès que possible.__

\`\`\`.\`\`\`

**Rappel de sécurité:** Ne partagez jamais de mots de passe, de clés d'API complètes ou d'identifiants sensibles dans ce chat. Si une vérification est nécessaire, un agent vous guidera via un protocole sécurisé.
						
						`)
					.setColor('Blurple')
					.setTimestamp()

				c.send({ content: `<@&1421524017688477888> <@${interaction.user.id}>`, embeds: [embed], components: [row] })
			})

	}
};
