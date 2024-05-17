const { DataTypes } = require('sequelize');
const sequelize = require('../conf/db.conn');

const Token = sequelize.define('Token', {
    userId: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        references: {
            model: 'Users',
            key: 'id'
          }
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
  timestamps: false
});

module.exports = Token;