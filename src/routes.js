const express = require('express')

const UserController = require('./controllers/UserController')
const ClientController = require('./controllers/ClientController')
const ProtocolController = require('./controllers/ProtocolController')
const AuthController = require('./controllers/AuthController')

const routes = express.Router()

routes.post('/auth', AuthController.index)

routes.post('/users', UserController.store)
routes.get('/users', UserController.index)
routes.get('/users/:id', UserController.single)
routes.put('/users/:id', ClientController.update)
routes.delete('/users/:id', ClientController.delete)

routes.post('/clients', ClientController.store)
routes.get('/clients', ClientController.index)
routes.get('/clients/:id', ClientController.single)
routes.put('/clients/:id', ClientController.update)
routes.delete('/clients/:id', ClientController.delete)


routes.post('/protocols', ProtocolController.store)
routes.get('/protocols', ProtocolController.index)
routes.get('/protocols/:id', ProtocolController.single)
routes.put('/protocols/:id', ClientController.update)
routes.delete('/protocols/:id', ClientController.delete)


module.exports = routes