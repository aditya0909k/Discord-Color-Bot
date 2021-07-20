const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'help',
    execute(message, args) {
        const helpEmbed = new Discord.MessageEmbed()
            .setColor(0x5865f2)
            .setAuthor('Made by cas#7139', 'https://64.media.tumblr.com/14127e159a2599cefb88b9ba951f1e41/tumblr_oo7pt0NdRL1ugye8so4_250.png')
          //  .setThumbnail('https://d31sxl6qgne2yj.cloudfront.net/wordpress/wp-content/uploads/20190111101501/LSD-Colors.jpg')
            .addFields(
                { name: '.color', value: 'The .color command accepts multiple variations of hex/rgb code values.' },
                { name: 'HEX', value: 'The starting "#" is not required; capitalization does not matter.'},
                { name: 'RGB', value: 'The starting "rgb" is not required, neither are the parantheses.'},
                {name: 'The following work for HEX:', value: '.color #5865f2\n.color 5865f2\n.color 5865F2', inline: true},
                {name: 'The following work for RGB:', value: '.color rgb(88, 101, 242)\n.color (88, 101, 242)\n.color 88, 101, 242', inline: true},

            )
        message.channel.send(helpEmbed);
    }
}
