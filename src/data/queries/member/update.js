const pool = require('../../config/pool');
module.exports =
    async (i, id) => {
        return pool.query(
            `UPDATE member
            SET
            total = total + $1
            WHERE
            id = $2
            RETURNING
            total;`, [i, id]
        );
    }