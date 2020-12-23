const pool = require('./config/pool');
module.exports =
    async () => {
        // CREATE TABLE [USER]
        await require('./config/tables/member')(pool);       
    }