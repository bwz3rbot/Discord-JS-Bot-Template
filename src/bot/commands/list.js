const embed = require('../../util/embed');
const database = require('../../data/methods');
module.exports =
    async (message) => {
        const members = await database.member.all();
        if (members.rowCount === 0) {
            return message.channel.send(embed({
                title: `Members List:`,
                description: memberlist,
                color: '3f95b6'
            }));
        }
        let memberlist = ``;
        for (const member of members.rows) {
            memberlist = memberlist.concat(`<@${member.id}> - ${member.total}\n`);
        }
        await message.channel.send(embed({
            title: `Members List:`,
            description: memberlist,
            color: '3f95b6'
        }));
    }