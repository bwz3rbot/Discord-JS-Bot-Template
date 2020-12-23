const {
    Pool
} = require('pg');

module.exports = new Pool({
    user: process.env.PGUSER,
    password: process.env.PGPASS,
    host: process.env.PGURL,
    port: process.env.PGPORT,
    database: process.env.DBNAME
});