const pool = require('../../config/pool');
module.exports =
    async (id) => {
        return pool.query(
            `INSERT INTO member
            (id)
            VALUES
            ($1);`, [id]
        );
    }