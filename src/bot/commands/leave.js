const embed = require('../../util/embed');
const database = require('../../data/methods');
module.exports =
    async (message) => {
        const wasUser = await database.member.delete(message.author.id);

        if (wasUser.rowCount === 0) {
            return message.channel.send(embed({
                title: `Errmm..`,
                description: `<@${message.author.id}> wasn't registered to begin with!`,
                color: '3f95b6'
            }));
        } else {
            await message.channel.send(embed({
                title: `Awww ):`,
                description: `<@${message.author.id}> has left!`,
                color: '3f95b6'
            }));
        }

    }