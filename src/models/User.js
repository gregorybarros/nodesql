const { Model, DataTypes } = require('sequelize')

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            secondName: DataTypes.STRING,
            email: DataTypes.STRING,
            phone: DataTypes.STRING,
            office: DataTypes.STRING,
            dateBirth: DataTypes.DATE,
            dateAdm: DataTypes.DATE,
            zip: DataTypes.STRING,
            city: DataTypes.STRING,
            state: DataTypes.STRING,
            adress: DataTypes.STRING,
            password: DataTypes.STRING,
            eAdmin: DataTypes.INTEGER,
            totalProt: DataTypes.INTEGER
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.hasMany(models.Protocol, { foreignKey: 'user', as: 'users' })
    }
}

module.exports = User