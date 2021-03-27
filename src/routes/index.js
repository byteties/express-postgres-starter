import express from 'express'
import userController from '../controller/user'

const route = express()

route.post('/user',userController.add)
route.put('/user/:id',userController.update)
route.get('/user/:id',userController.get)
route.get('/users',userController.getAll)


route.get('/healthz', (req, res) => {
  res.send('OK')
})

route.get('/', (req, res) => {
    res.status(200).send('hello world');
});

export default route