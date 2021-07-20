const Discord = require('discord.js');

module.exports = {
    name: 'sendColor',
    description: 'sends color image',
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
        function componentToHex(c) {
            let hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
          }
          
          function rgbToHex(r, g, b) {
            return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
          }
        let rgb = false;
        if (args[0].includes(','))
            rgb = true;
        if (!rgb)
        {
            colorHEX = args[0];
            let hash = false;
            if (args[0].includes("#"))
                hash = true;
            if (hash)
                colorHEX = colorHEX.substring(1);
            colorRGB = hexToRgb(colorHEX);
        }
        else 
        {
            let rgbStart = false;
            let par = false;
            if (args[0].includes('rgb'))
                rgbStart = true;
            if (args[0].includes('('))
            par = true;
            args[0] = args[0].replace(/,/g, "");
            args[1] = args[1].replace(/,/g, "");
            args[2] = args[2].replace(/,/g, "");
            if (par)
            {
                args[0] = args[0].substring(1);
                args[2] = args[2].substring(0, args[2].length-1);
                colorRGB = args;
            }
            if (rgbStart)
            {
                args[0] = args[0].substring(3);
            }
            let r = parseInt(args[0]);
            let g = parseInt(args[1]);
            let b = parseInt(args[2]);
            colorHEX = rgbToHex(r, g, b);
            colorHEX = colorHEX.substring(1);
            colorRGB = hexToRgb(colorHEX);
            

        }
        let link = `https://dummyimage.com/256x256/${colorHEX}/${colorHEX}`;
        const colorEmbed = new Discord.MessageEmbed()
            .setColor(colorHEX)
            .addFields (
                    {name: 'HEX CODE', value: `#${colorHEX}`},
                    {name: 'RGB CODE', value: colorRGB},
            )
            .setImage(link)
        message.channel.send(colorEmbed);
    }
}
