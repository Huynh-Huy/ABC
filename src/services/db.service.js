const mysql = require('mysql2/promise');
const dbConfig = require('../configs/db.config');
let connection = null


async function query(sql, params) {
    try {
        connection = connection || await mysql.createConnection(dbConfig);
        console.log('Connect database')
    } catch (error) {
        console.log(error, 'Faild connect database')
    }
    const [results, ] = await connection.execute(sql, params);
    return results;
}

// async function connect(){
//     connection = await mysql.createConnection(dbConfig);
//     console.log("Connected to db");
// }

module.exports = {
    query,
    // connect
}