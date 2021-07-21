const Discord = require('discord.js');

module.exports = {
    name: 'sendColor',
    description: 'sends color image, hex, rgb',
    execute(message, args) {
        let colorHEX;
        let colorRGB;
        function hexToRgb(hex) 
        {
            var bigint = parseInt(hex, 16);
            var r = (bigint >> 16) & 255;
            var g = (bigint >> 8) & 255;
            var b = bigint & 255;
            return `rgb(${r}, ${g}, ${b})`;
        }
        function componentToHex(c) 
        {
            let hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        }
        function rgbToHex(r, g, b) 
        {
            return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
        }
        if (!args[0].includes(',') && args.length === 1)
        {
            colorHEX = args[0];
            if (colorHEX.includes("#"))
                colorHEX = colorHEX.substring(1);
            if (colorHEX.length < 6 || colorHEX.length > 6)
                return message.channel.send("Invalid color!");
            colorHEX = colorHEX.toLowerCase();
            colorRGB = hexToRgb(colorHEX);
        }
        else 
        {
            if (args[0].substring(0, 3) === "rgb")
                args[0] = args[0].replace(/rgb/g, "");
            if (args[0].includes('('))
            {
                try {
                    args[0] = args[0].substring(1);
                    args[2] = args[2].substring(0, args[2].length-1);
                } catch(err) {}
            }
            try {
                args[0] = args[0].replace(/,/g, "");
                args[1] = args[1].replace(/,/g, "");
                args[2] = args[2].replace(/,/g, "");
            } catch(err) {}
            if (args.length !== 3)
                return message.channel.send("Invalid color!");
            for (let i = 0; i < args.length; i++)
            {
                if (parseInt(args[i]) > 255 || parseInt(args[i]) < 0)
                    return message.channel.send("Invalid color!");
            }
            let r = parseInt(args[0]);
            let g = parseInt(args[1]);
            let b = parseInt(args[2]);
            colorHEX = rgbToHex(r, g, b);
            colorHEX = colorHEX.substring(1);
            colorRGB = hexToRgb(colorHEX);
        }
        let link = `https://dummyimage.com/256x256/${colorHEX}/${colorHEX}`;
        if (colorHEX < 0 || colorHEX > 0xffffff) return message.channel.send("Invalid Color!");
        const colorEmbed = new Discord.MessageEmbed()
            .setColor(0x2e3036)
            .addFields (
                    {name: 'HEX CODE', value: `#${colorHEX}`, inline: true},
                    {name: 'RGB CODE', value: `${colorRGB}`, inline: true},
            )
            .setImage(link)
        message.channel.send(colorEmbed);
    }
}
