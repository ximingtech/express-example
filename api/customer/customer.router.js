const { getCustomerById, getCustomer, updateCustomer, createCustomer, token_generator } = require("./customer.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createCustomer);
router.get("/", checkToken, getCustomer);
router.get("/:customer_code", getCustomerById);
router.patch("/", checkToken, updateCustomer);
router.post("/token_generator", token_generator);

module.exports = router;