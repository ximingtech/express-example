const { getIncomeList, getIncomeListByID, updateIncomeListByID, createIncomeList, token_generator } = require("./income.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", createIncomeList);
router.get("/", getIncomeList);
router.get("/:income_id", getIncomeListByID);
router.patch("/", updateIncomeListByID);
router.post("/token_generator", token_generator);

module.exports = router;
