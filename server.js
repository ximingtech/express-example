require("dotenv").config();
const express = require("express");
const app = express();
const custRouter = require("./api/customer/customer.router");
const incomeRouter = require("./api/income/income.router");

app.use(express.json());
app.use("/api/customer", custRouter);
app.use("/api/income", incomeRouter);
app.listen(process.env.APP_PORT,()=>{
    console.log("Server up and running on PORT :", process.env.APP_PORT);
})