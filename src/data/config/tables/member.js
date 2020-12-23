module.exports =
    async (pool) => {
        console.info('CREATE TABLE [member]');
        try {
            await pool.query(
                `CREATE TABLE IF NOT EXISTS member(
                id TEXT PRIMARY KEY NOT NULL,
                total INTEGER NOT NULL DEFAULT 0
                );`
            );
        } catch (err) {
            console.log(err);
        }
    }