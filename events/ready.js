const { ActivityType } = require('discord.js');
const client = require('..');
const chalk = require('chalk');

client.on("ready", () => {

	setInterval(() => {
		client.user.setActivity({ name: `${client.users.cache.size} guardiGoats`, type: ActivityType.Watching })
	}, 5000);

	console.log(chalk.red(`Logged in as ${client.user.tag}!`))
});