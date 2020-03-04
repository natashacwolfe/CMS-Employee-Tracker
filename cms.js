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
    startCMS();
});

function startCMS() {
    inquirer
    .prompt({
        name: 'action',
        type: 'rawlist',
        message: 'Welcome to the CMS Employee Tracker! What can we assist with today?',
        choices: [
            'View All Employees',
            'View All Employees By Department', 
            'View All employees By Role',
            'Add Employeee',
            'Remove Employee',
            'Update Employee Role',
            'Update Deparment',
            'Update Role',
        ]
    })
    .then(function(answer) {
        console.log(answer);
    })
}