const pool = require('../../config/pool');
module.exports =
    async (id) => {
        return pool.query(
            `DELETE FROM member
            WHERE
            id = $1
            RETURNING *;`, [id]
        );
    }