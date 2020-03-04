// dependencies 
var mysql = require('mysql');
var inquirer = require('inquirer');
var cTable = require('console.table');

// create connection
var connection = mysql.createConnection({
    host: 'localhost', 
    port: 3306,
    user: 'root', 
    password: 'password',
    database: 'cmsDB'
});

connection.connect((err) => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});