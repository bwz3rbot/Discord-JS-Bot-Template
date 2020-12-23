const Embed = require('discord.js').MessageEmbed;

module.exports =
    ({
        title,
        description,
        author,
        footer,
        image,
        url,
        thumbnail,
        color,
        fields,
        files

    }) => {
        const e = new Embed();
        title ? e.setTitle(title) : false;
        description ? e.setDescription(description) : false;
        author ? e.setAuthor(author) : false;
        footer ? e.setFooter(footer) : false;
        image ? e.setImage(image) : false;
        url ? e.setURL(url) : false;
        thumbnail ? e.setThumbnail(thumbnail) : false;
        color ? e.setColor(color) : false;
        fields ? e.addFields(fields) : false;
        files ? e.attachFiles(files) : false;
        return e;
    }