import { Pool } from 'pg'

const pool = new Pool({
  host: 'postgres',
  database: 'postgres',
  user: 'postgres',
  password: 'postgres',
  port: 5432,
})

export default pool