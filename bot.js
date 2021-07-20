const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.';

client.once('ready', () => { 
    console.log("System online");
});

const fs = require('fs');
client.commands = new Discord.Collection(); 
const commandFiles = fs.readdirSync('./src/commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) 
        return;
    const args = message.content.slice(prefix.length).split(/ +/g); 
    const command = args.shift().toLowerCase(); 
    if (command === 'ping') 
        client.commands.get('ping').execute(message, args); 
    if (command === 'color')
        client.commands.get('sendColor').execute(message, args);
    if (command === 'help')
        client.commands.get('help').execute(message, args);
});

client.login('[TOKEN]');
