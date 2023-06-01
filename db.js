const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: '/var/run/postgresql',
  database: 'recipeapp',
  password: 'PO_f7VG3jY8!',
  port: 5432, // Default PostgreSQL port
});

module.exports = pool;
