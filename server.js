require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const custRouter = require("./api/customer/customer.router");
const incomeRouter = require("./api/income/income.router");
const expensesRouter = require("./api/expenses/expenses.router");
const generalRouter = require("./api/general/general.router");

app.use(cors());
app.use(express.json());
app.use("/api/customer", custRouter);
app.use("/api/income", incomeRouter);
app.use("/api/expenses", expensesRouter);
app.use('/api/general', generalRouter);
app.listen(process.env.APP_PORT,()=>{
    console.log("Server up and running on PORT :", process.env.APP_PORT);
})