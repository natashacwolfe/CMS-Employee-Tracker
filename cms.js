// dependencies 
var mysql = require('mysql');
var inquirer = require('inquirer');
var cTable = require('console.table');

// classes 
var role = require('./role');
var employee = require('./employee');
var deparment = require('./department');


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
        switch(answer.action) {
            case 'View All Employees':
                viewAllEmp();
                break;

            case 'View All Employees By Department' :
                viewEmpDepartment();
                break;
            
            case 'View All employees By Role':
                viewEmpRole();
                break;
            case 'Add Employeee':
                addEmployee();
                break;
            case 'Update Employee Role':
                updateEmpRole();
                break;
        };
    });
};

function viewAllEmp() {

};

function viewEmpDepartment() {
    inquirer
    .prompt({
        name: 'department',
        type: 'list',
        message: 'What Department Would You Like To View All Employees?',
        choices: [
            'Sales',
            'Engineering',
            'Finance',
            'Legal'
        ]
    }) 
    .then(function(answer) {
        console.log(answer)
        switch(answer.department) {
            case 'Sales': 
                break;
            case 'Engineering':
                break;
            case 'Finance':
                break;
            case 'Legal':
                break;
        };
    });
};

function viewEmpRole() {
    inquirer
    .prompt({
        name: 'role',
        type: 'list',
        message: 'What Department Would You Like To View All Employees?',
        choices: [
            'Sales Lead',
            'Sales Person',
            'Lead Engineer',
            'Software Engineer',
            'Lead Accountant',
            'Accountant',
            'Legal Team Lead',
            'Lawyer'
        ]
    }) 
    .then(function(answer) {
        console.log(answer)
        switch(answer.role) {
            case 'Sales Lead': 
                break;
            case 'Sales Person':
                break;
            case 'Lead Engineer':
                break;
            case 'Software Engineer':
                break;
            case 'Lead Accountant': 
                break;
            case 'Accountant':
                break;
            case 'Legal Team Lead':
                break;
            case 'Lawyer':
                break;
        };
    });
};

function updateEmpRole(){

};