const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();

const bodyParser = require("body-parser");
const rootDir = require("./util/path");
const sequelize = require("./util/database");
const Expense = require("./model/expense");

const adminRoutes = require("./routes/admin");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));
app.use(bodyParser.json());
app.use(cors());

app.set("view engine", "ejs");
app.set("views", "views");

sequelize.sync().then(() => {
  console.log("Database synchronized");
});

app.use("/admin", adminRoutes);


app.listen(3000, (req, res, next) => {
  console.log("server listening on PORT=3000");
});
