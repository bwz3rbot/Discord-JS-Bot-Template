const embed = require('../../util/embed');
const database = require('../../data/methods');
module.exports =
    async (message) => {
        try{
        await database.member.insert(message.author.id);
        await message.channel.send(embed({
            title: `Woohoo!`,
            description:`<@${message.author.id}> has joined!`,
            color:'3f95b6'
        }));
    }catch(err){
        if(err.message.includes('duplicate key')){
            await message.channel.send(embed({
                title: `Hey, now!`,
                description:`<@${message.author.id}> has already joined!`,
                color:'3f95b6'
            }));
        }
    }
    }