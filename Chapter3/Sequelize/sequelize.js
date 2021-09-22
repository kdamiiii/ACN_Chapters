const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

const Employee = sequelize.define('Employee', {
    empNumber:{
        type: DataTypes.NUMBER,
        allowNull: false
    },
    empName:{   
        type: DataTypes.STRING,
        allowNull: false
    },
    empJobTitle:{
        type: DataTypes.STRING,
        allowNull: false
    },
    empDepartment:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = sequelize;