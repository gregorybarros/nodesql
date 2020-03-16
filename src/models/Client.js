const { Model, DataTypes } = require('sequelize')

class Client extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            code: DataTypes.INTEGER,
            category: DataTypes.STRING,
            resp: DataTypes.STRING,
            email: DataTypes.STRING,
            adress: DataTypes.STRING,
            city: DataTypes.STRING,
            zip: DataTypes.STRING,
            state: DataTypes.STRING,
            since: DataTypes.DATE,
            obs: DataTypes.TEXT,
            soft: DataTypes.STRING,
            phone: DataTypes.STRING
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.hasOne(models.Protocol, { foreignKey: 'client', as: 'client' })
    }
}

module.exports = Client