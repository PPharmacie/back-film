const { DataTypes } = require('sequelize');
const sequelize = require('../conf/db.conn');

const movieModel = sequelize.define('Movie', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    yearPublication: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    actors: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
}, {
  timestamps: false
});

module.exports = movieModel;