
const { Pool } = require('pg');

const pool = new Pool({
  user: 'vivero_adsc_user',
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  database: 'vivero_adsc',
  password: 'givD9OTbIsr2u4rVg6RMG09t9ZqY1A2P',
  port: 5432
});

module.exports = pool;