const pool = require('../../config/pool');
module.exports =
    async () => {
        return pool.query(
            `SELECT * FROM member;`
        );
    }