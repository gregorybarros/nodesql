const Client = require('../models/Client')


module.exports = {
    async index(req, res) {
        const clients = await Client.findAll()

        return res.json(clients)
    },

    async store(req, res) {
        
        const client = await Client.create(req.body)

        return res.json(client)
    },

    async single(req, res) {

        const { id } = req.params

        const client = await Client.findByPk(id)

        return res.json(client)
    },

    async update(req, res) {
        console.log(req.body)
        const { id } = req.params
        const client = await Client.update(req.body, {
            where: {id}
        })

        return res.json(client)
    },

    async delete(req, res) {
        const { id } = req.params

        const client = await Client.destroy({where:{id}})

        return res.json(client)
    }

}