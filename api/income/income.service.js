const pool = require("../../config/database");

module.exports = {
    //insert income list create by user into database
    createIncomeList: (data, callBack) => {
        pool.query(
            `insert into list_income(in_id, in_name, in_amt, user_id) values (?,?,?,?);`,
            [
                data.in_id,
                data.in_name,
                data.in_amt,
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
    getIncomeList: callBack => {
        pool.query(
            `select * from list_income;`,
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
    getIncomeListByID: (id, callBack) => {
        pool.query(
            `select * from list_income where id = ?;`,
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
    updateIncomeListByID: (data, callBack) => {
        pool.query(
            `update list_income set in_id = ?, in_name = ?, in_amt = ? where id = ?; `,
            [
                data.in_id,
                data.in_name,
                data.in_amt,
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