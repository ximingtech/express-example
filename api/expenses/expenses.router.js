const { getExpenses, getExpensesByID, updateExpensesByID, createExpenses, token_generator } = require("./expenses.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createExpenses);
router.get("/", checkToken, getExpenses);
router.get("/:income_id", checkToken, getExpensesByID);
router.patch("/", checkToken, updateExpensesByID);
router.post("/token_generator", token_generator);

module.exports = router;