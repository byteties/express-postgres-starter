import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import route from './routes' 

const app = express()


app.use(bodyParser.json());
app.use(cors());
app.use(route)
app.use(express.json())

app.listen(8002, () => {
  console.log('Application is running on port 8002')
})


