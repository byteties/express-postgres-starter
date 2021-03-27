import pool from '../queries'

const add = async(req,res) =>{
  const { body } = req
  const { firstName, lastName } = body
  const text = `INSERT INTO users(first_name, last_name) VALUES($1, $2) RETURNING *`
  const values = [firstName, lastName]
  try {
    const result = await pool.query(text, values)
    return res.send(result.rows[0])
  } catch (err) {
    console.log(err.stack)
  }
}

const update = async(req,res) =>{
  const { params,body} = req
  const { id } = params
  const { firstName, lastName } = body
  const text = `UPDATE users
        SET first_name = '${firstName}', last_name= '${lastName}'
        WHERE id = ${id};`
  try {
    await pool.query(text)
    return res.status(200).send('Update Successfully!!!')
  } catch (err) {
    console.log(err.stack)
  }
}

const get = async (req,res) => {
  const { id } = req.params
  const text = `SELECT * FROM users WHERE id=${id}`
  try {
    const result = await pool.query(text)
    return res.send(result.rows[0])
  } catch (err) {
    console.log(err.stack)
  }
  
}

const getAll = async(req,res) =>{
  const text = `SELECT * FROM users`
  try {
    const result = await pool.query(text)
    return res.send(result.rows)
  } catch (err) {
    console.log(err.stack)
  }
}
export default{
  add,
  update,
  getAll,
  get
}