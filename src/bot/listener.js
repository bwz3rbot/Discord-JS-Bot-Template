module.exports =
    async (message) => {
        if (message.author.id !=
            process.env.MY_USER_ID) {
            return;
        }
        console.log("handling the command!");
        const cmd = require('../util/command')(message.content);
        console.log(cmd);
        if (cmd) {
            switch (cmd.directive) {
                case ('help'):
                    await require('./commands/help')(message);
                    break;
                case ('join'):
                    await require('./commands/join')(message);
                    break;
                case ('leave'):
                    await require('./commands/leave')(message);
                    break;
                case ('list'):
                    await require('./commands/list')(message);
                    break;
                case ('add'):
                    await require('./commands/add')(message);
                    break;
                case ('view'):
                    await require('./commands/view')(message);
                    break;
            }
        }
    }