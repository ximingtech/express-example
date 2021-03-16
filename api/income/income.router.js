const { getIncomeList, getIncomeListByID, updateIncomeListByID, createIncomeList, token_generator } = require("./income.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createIncomeList);
router.get("/", checkToken, getIncomeList);
router.get("/:income_id", checkToken, getIncomeListByID);
router.patch("/", checkToken, updateIncomeListByID);
router.post("/token_generator", token_generator);

module.exports = router;
