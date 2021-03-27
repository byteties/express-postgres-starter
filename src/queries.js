const Pool = require('pg').Pool
const pool = new Pool({
  host: 'localhost',
  database: 'postgres',
  user: 'postgres',
  password: 'postgres',
  port: 5432,
})

export default pool