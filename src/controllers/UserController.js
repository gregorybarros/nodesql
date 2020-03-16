const User = require('../models/User')


module.exports = {
    async index(req, res) {
        const users = await User.findAll({
            where:{id:[1]}
        })

        return res.json(users)
    },

    async store(req, res) {
        console.log(req.body)

        const user = await User.create(req.body)

        return res.json(user)
    },

    async single(req, res) {
        const { id } = req.params
        const user = await User.findByPk(id)

        return res.json(user)
    },

    async update(req, res) {
        
        const { id } = req.params
        const user = await User.update(req.body, {
            where: {id}
        })

        return res.json(user)
    },

    async delete(req, res) {
        const { id } = req.params

        const user = await User.destroy({where:{id}})

        return res.json(user)
    }

}