// dependencies 
var mysql = require('mysql');


// create connection
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost', 
    port: 3306,
    user: 'root', 
    password: 'password',
    database: 'cmsDB'
});



module.exports = {
    getConnection: (callback) => {
        return pool.getConnection(callback);
    }
};