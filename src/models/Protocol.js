const { Model, DataTypes } = require('sequelize')

class Protocol extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
            content: DataTypes.TEXT,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user', as: 'users'})
        this.belongsTo(models.Client, { foreignKey: 'client', as: 'clients'})
    }
}

module.exports = Protocol