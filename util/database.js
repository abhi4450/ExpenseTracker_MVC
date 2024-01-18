const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "a1b9h9i1s", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
