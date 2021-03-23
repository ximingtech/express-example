const { getDashboard, token_generator } = require("./general.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.get("/", getDashboard);
router.post("/token_generator", token_generator);

module.exports = router;