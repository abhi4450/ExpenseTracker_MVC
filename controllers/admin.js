const Expense = require("../model/expense");

exports.getExpenseForm = (req, res, next) => {
  Expense.findAll().then((expenses) => {
    res.render("add-expense", {
      expenses: expenses,
    });
  });
};

exports.postExpenseForm = (req, res, next) => {
  const amount = req.body.amount;
  const description = req.body.description;
  const category = req.body.category;

  Expense.create({
    amount: amount,
    description: description,
    category: category,
  })

    .then(() => {
      console.log("New expense successfully saved");
      res.redirect("/admin/addexpense");
    })
    .catch((err) => console.log("error saving new expenses: ", err));
};

exports.deleteExpense = (req, res, next) => {
  const expenseId = req.params.expenseId;

  Expense.findByPk(expenseId)
    .then((expense) => {
      return expense.destroy();
    })
    .then(() => {
      console.log("succesfully deleted");
      res.redirect("/admin/addexpense");
    })
    .catch((err) => console.log("error deleteing : err"));
};
