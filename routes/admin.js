const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin");

router.get("/addexpense", adminController.getExpenseForm);

router.post("/saveExpense", adminController.postExpenseForm);

router.post("/addexpense/:expenseId", adminController.deleteExpense);

module.exports = router;
