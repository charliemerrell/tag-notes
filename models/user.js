const db = require("../db");
const { DataTypes } = require("sequelize");

const User = db.define(
    "User",
    {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        passwordHash: {
            type: DataTypes.STRING,
        },
    },
    {}
);

module.exports = User;
