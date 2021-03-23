const { getDashboard, token_generator } = require("./general.service");
const { sign } = require("jsonwebtoken");

module.exports = {
    getDashboard: (req, res) => {
        getDashboard((err, results) => {
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