const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const User = require('../models/User')
const Client = require('../models/Client')
const Protocol = require('../models/Protocol')
//require('../controllers/AuthController')

const connection = new Sequelize(dbConfig)

connection.authenticate().then(()=>
    console.log("Mysql conectado!"))
.catch((err) => {
    console.log("Erro ao se conectar com Mysql!"+err)
})

User.init(connection)
Client.init(connection)
Protocol.init(connection)

Protocol.associate(connection.models)
Client.associate(connection.models)
User.associate(connection.models)

    
module.exports = connection