const { DataTypes } = require('sequelize');
const sequelize = require('../conf/db.conn');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
  timestamps: false
});

module.exports = User;