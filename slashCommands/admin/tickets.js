const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType, ButtonStyle, PermissionFlagsBits } = require('discord.js');

module.exports = {
    name: 'tickets',
    description: "Affiche les tickets",
    type: ApplicationCommandType.ChatInput,
    default_member_permissions: [PermissionFlagsBits.Administrator],
    cooldown: 3000,
    run: async (client, interaction) => {

        const embed = new EmbedBuilder()
            .setTitle(`💙 Guardia 2025-2026 | Tickets`)
            .setDescription(`
> **Support de la promotion 2025-2026**

Cliquez sur le \`bouton\` ci-dessous pour créer un ticket.

Un canal **privé et sécurisé** sera instantanément créé pour vous, et notre équipe vous repondra dans les meilleurs délais.
                `)
            .setColor('Blurple')

        const components = [];

        components.push(
            new ButtonBuilder()
                .setCustomId("open-ticket")
                .setLabel("Ouvrir un ticket")
                .setStyle(ButtonStyle.Success)
        )


        const row = new ActionRowBuilder()
            .addComponents(components);

        return interaction.channel.send({ embeds: [embed], components: [row] })
    }
};
