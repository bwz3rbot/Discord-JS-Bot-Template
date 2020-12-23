const embed = require('../../util/embed');
commands = [{
    name: 'help',
    description: 'This list of commands!'
}, {
    name: 'join',
    description: 'Join the list of members'
}, {
    name: 'leave',
    description: 'Remove yourself from the list'
}, {
    name: 'view',
    description: 'View your total'
}, {
    name: 'add',
    description: 'Add to your total'
},{
    name: 'list',
    description: 'See the list of members and their totals'
}]
module.exports =
    async (message) => {

        let description = ``;
        for (const command of commands) {
            description = description.concat(
                `|\`${process.env.PREFIX}${command.name}\`| ${command.description}\n`);
        }
        await message.channel.send(embed({
            title: `Commands List:`,
            description: description,
            color: '3f95b6'
        }));
    }