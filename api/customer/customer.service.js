const pool = require("../../config/database");

module.exports = {
    createCustomer: (data, callBack) => {
        pool.query(
            `call proc_customer_insert(?,?,?,?,?,?,?,?,?,?,?,?,?,@a,@b,@c);`,
            [
                data.acctype,
                data.fullname,
                data.email,
                data.encryptpwd,
                data.mobile,
                data.billname,
                data.billfloor_unit,
                data.billaddress,
                data.billtown,
                data.billpostcode,
                data.billstate,
                data.businessnature,
                data.isactive
            ],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    getCustomer: callBack => {
        pool.query(
            `select * from customer;`,
            [],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    getCustomerById: (customer_code, callBack) => {
        pool.query(
            `select * from customer where customer_code = ?;`,
            [
                customer_code
            ],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }

        )
    },
    updateCustomer: (data, callBack) => {
        pool.query(
            `update customer c set fullname = ucase(?), billname = ucase(?) where customer_code = ?;`,
            [
                data.fullname,
                data.billname,
                data.customer_code
            ],
            (error,results,fields) => {
                if(error){
                    callBack(error);
                }
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