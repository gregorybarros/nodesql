const Protocol = require('../models/Protocol')


module.exports = {
    async index(req, res) {
        console.log(req.query.equal)
        const {page, perPage, sort, equal} = req.query
        const protocols = await Protocol.findAndCountAll({
            order:[["id", "DESC"]], 
            offset:parseInt(page)||0,
            limit:parseInt(perPage)||10,
            include: [{ association: 'users' },
            { association: 'clients' }]       
        })

        return res.json(protocols)
    },

    async store(req, res) {
        console.log(req.body)
        const { title, content, user, client } = req.body

        const protocol = await Protocol.create({ 
            title, 
            content, 
            user, 
            client 
        })

        return res.json(protocol)
    },

    async single(req, res) {

        const { id } = req.params

        const protocol = await Protocol.findByPk(id)

        return res.json(protocol)
    },

    async update(req, res) {
        
        const { id } = req.params
        const protocol = await Protocol.update(req.body, {
            where: {id}
        })

        return res.json(protocol)
    },

    async delete(req, res) {
        const { id } = req.params

        const protocol = await Protocol.destroy({where:{id}})

        return res.json(protocol)
    }

}