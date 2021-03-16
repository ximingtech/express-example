const pool = require("../../config/database");

module.exports = {
    //insert expenses list create by user into database
    createExpenses: (data, callBack) => {
        pool.query(
            `insert into list_expenses(in_id, in_name, in_amt, user_id) values (?,?,?,?);`,
            [
                data.ex_id,
                data.ex_name,
                data.ex_amt,
                data.user_id
            ],
            (error, results) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    //fetch all list from database 
    getExpenses: callBack => {
        pool.query(
            `select * from list_expenses;`,
            [],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    //fetch specific record from database by id
    getExpensesByID: (id, callBack) => {
        pool.query(
            `select * from list_expenses where id = ?;`,
            [
                id
            ],
            (error,results) => {
                if(error)
                    return callBack(error);
                return callBack(null, results[0]);
            }
        )
    },
    //update specific recod from database by
    updateExpensesByID: (data, callBack) => {
        pool.query(
            `update list_expenses set ex_id = ?, ex_name = ?, ex_amt = ? where id = ?; `,
            [
                data.ex_id,
                data.ex_name,
                data.ex_amt,
                data.id
            ],
            (error,results) => {
                if(error)
                    return callBack(error);
                return callBack(null, results[0]);
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