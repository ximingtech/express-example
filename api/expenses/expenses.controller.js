const { getExpenses, getExpensesByID, updateExpensesByID, createExpenses, token_generator } = require("./expenses.service");
const { sign } = require("jsonwebtoken");

module.exports = {
    createExpenses: (req, res) => {
        const body = req.body;
        createExpenses(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error."
                });
            }
            return res.status(200).json({
                success: 1,
                message: results
            })
        })
    },
    getExpenses: (req, res) => {
        getExpenses((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            })
        })
    },
    getExpensesByID: (req, res) => {
        const customer_code = req.params.customer_code;
        getExpensesByID(customer_code, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Record not Found"
                })
            }
            return res.json({
                success: 1,
                data: results
            })
        })
    },
    updateExpensesByID: (req, res) => {
        const body = req.body;
        updateExpensesByID(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Record not Found"
                })
            }
            return res.json({
                success: 1,
                message: "Update successfully."
            })
        })
    },
    token_generator: (req, res) => {
        const body = req.body;
        token_generator(body, results => {
            if(results == "Success"){
                const jsontoken = sign({result: results}, process.env.SECRET_KEY, {
                    expiresIn: "1h"
                })
                return res.json({
                    success: 1,
                    message: "Token generated.",
                    token: jsontoken
                })
            }else{
                return res.json({
                    success: 0,
                    message: "ID or Password invalid."
                })
            }
        })
    }
}