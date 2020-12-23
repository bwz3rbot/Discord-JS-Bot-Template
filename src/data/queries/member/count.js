const pool = require('../../config/pool');
module.exports =
    async (id) => {
        return pool.query(
            `SELECT count(*) 
        FROM member
        WHERE
        id = $1;`, [id]
        );
    }