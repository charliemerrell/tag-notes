const { Sequelize } = require("sequelize");
const path = require("path");

const storage =
    process.env.NODE_ENV === "test"
        ? ":memory:"
        : path.join(__dirname, "db.sqlite");

const db = new Sequelize({
    dialect: "sqlite",
    storage,
});

module.exports = db;
