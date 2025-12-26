const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType, ButtonStyle } = require('discord.js');

module.exports = {
    name: 'darckphoenix',
    description: "Oui... l'ancien pseudo de ShadowRich avait une faute...",
    type: ApplicationCommandType.ChatInput,
    cooldown: 3000,
    options: [
    ],
    run: async (client, interaction) => {

        const embed = new EmbedBuilder()
            .setTitle('DarckPhoenix aka ShadowRich')
            .setTimestamp();

        const components = []
        components.push(
            new ButtonBuilder()
            .setCustomId('darckphoenix')
                .setLabel('SPAM CLICK !!')
                .setStyle(ButtonStyle.Danger)
        )


        const row = new ActionRowBuilder()
            .addComponents(components);

        return interaction.reply({ embeds: [embed], components: [row] })
    }
};
