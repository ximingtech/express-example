const pool = require("../../config/database");

module.exports = {
    //fetch all list from database 
    getDashboard: callBack => {
        pool.query(
            `select (income-expenses) as bal, expenses, income
            from(select 
            (SELECT sum(ex_amt) FROM SPQ4LFcn0K.list_expenses) as expenses, 
            (select sum(in_amt) from SPQ4LFcn0K.list_income) as income)a;`,
            [],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    token_generator: (data, callBack) => {
        let keyid = process.env.KEY_ID;
        let keypassword = process.env.KEY_PASSWORD;

        if(data.id == keyid && data.password == keypassword){
            return callBack("Success");
        }else{
            return callBack("Failed");
        }
    }

}