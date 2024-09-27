const { Pool } = require('pg');

const pool = new Pool({
    user: 'david',
    password: '22798',
    host: 'iwws40kwsgcscg0cwgooo4og',
    port: 5432, // default Postgres port
    database: 'ddtrack'
});

module.exports = {
    query: (text, params) => pool.query(text, params)
};
