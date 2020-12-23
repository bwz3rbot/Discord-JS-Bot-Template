const embed = require('../../util/embed');
const database = require('../../data/methods');
module.exports =
    async (message) => {
        const member = await database.member.select(message.member.id);
        console.log(member.rows[0]);
        if(member.rowCount === 0){
            return message.channel.send(embed({
                title: `You are not a member!`,
                description: `Please use \`${process.env.PREFIX}join\` to join.`,
                color:'3f95b6'
            }));
        }
        await message.channel.send(embed({
            title: `Your total:`,
            description: `${member.rows[0].total}`,
            color:'3f95b6'
        }));

 
    }