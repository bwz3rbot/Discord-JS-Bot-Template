require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const database = require('./data/methods');
const setPresence =
    async () => {
        console.log(`Successfully signed in as ${client.user.username}.`);
        try {
            if (client.user.username != process.env.SET_USERNAME) {
                console.log("UPDATING USERNAME TO:", process.env.SET_USERNAME);
                await client.user.setUsername(process.env.SET_USERNAME);
            }
        } catch (err) {
            if (err) {
                console.log("there was an error setting the username!");
                console.log(err);
            }
        }
        await client.user.setPresence({
            activity: {
                type: 'LISTENING',
                name: 'new users!'
            },
            status: 'online'
        });
    }

client.on('rateLimit',
    async (message) => {
        console.log("You are being rate limited!");
        console.log(message);

    });

// client.on('debug', (debug) => {
//     console.log("DEBUG EVENT!");
//     console.log(debug);
// });

client.on('disconnect', (message) => {
    console.log('DISCONNECT EVENT!');
    console.log(message);
});

client.on('error', (err) => {
    console.log('ERROR EVENT!');
    console.log(err);
});


client.once('ready',
    async () => {
        // await setPresence();
        console.log('BOT READY!');

        client.on('message',
            async (message) => {
                console.log("message?");
                if (message.author.id ===
                    client.user.id) {
                    return;
                }
                console.log('requireing listener');
                await require('./bot/listener')(message);
            });

    });


(async () => {
    await database.init();
    await client.login(process.env.TOKEN);
})();