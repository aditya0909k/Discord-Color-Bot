This bot takes the prefix, which is ".", then a hex or rgb code, and converts it into a full image of the color and both the rgb and hex code.

Example: 

.color ##7289da
OR
.color rgb(114, 137, 218)

Either of these commands will return the hex code, rgb code, and a full image of the color itself. The image is pulled from https://dummyimage.com. The hex/rgb is converted through bitwise algorithm(s).
