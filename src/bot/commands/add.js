const embed = require('../../util/embed');
const database = require('../../data/methods');
module.exports =
    async (message) => {
        try {
            const total = await database.member.update(1, message.author.id);
            await message.channel.send(embed({
                title: `Adding 1!`,
                description: `<@${message.author.id}> now has a total of ${total.rows[0].total}!`,
                color: '3f95b6'
            }));
        } catch (err) {
            if (err.message.includes('duplicate key')) {
                await message.channel.send(embed({
                    title: `Hey, now!`,
                    description: `<@${message.author.id}> has already joined!`,
                    color: '3f95b6'
                }));
            }
        }
    }