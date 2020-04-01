
var inquirer = require('inquirer');
var cTable = require('console.table');

// classes 
const db = require('./database');
var role = require('./role');
var employee = require('./employee');
var deparment = require('./department');
var query = require('./queries');

db.getConnection((err, conn) => {
    console.log("connected as id " + conn.threadId);
    startCMS(conn);
})


function startCMS(conn) {
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
                'Update Employee Role',
                'Exit Application'
            ]
        })
        .then(function (answer) {
            console.log(answer);
            switch (answer.action) {
                case 'View All Employees':
                    query.viewAllEmp();
                    break;

                case 'View All Employees By Department':
                    viewEmpDepartment()
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
                case 'Exit Application':
                    conn.release();
                    break;
            };
        });
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
        .then(function (answer) {
            console.log(answer)
            query.viewEmpDepartment(answer);
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
        .then(function (answer) {
            console.log(answer);
            query.viewEmpRole(answer);
        });
};

async function updateEmpRole() {
    db.getConnection((err, conn) => {
        let query = 'SELECT employee_ID, first_name, last_name FROM employee;';
        conn.query(
            query, function (err, results) {
                if (err) throw err;
                let empArr = results.map(({ employee_ID, first_name, last_name }) => ({
                    name: `${first_name} ${last_name}`,
                    value: `${employee_ID}`
                }))
                console.log(empArr)
                inquirer
                    .prompt({
                        name: 'id',
                        type: 'list',
                        message: 'What employee do you want to update their role?',
                        choices: empArr
                    }).then(function (empID) {
                        db.getConnection((err, con) => {
                            let query = 'SELECT role_ID, title FROM role;';
                            conn.query(
                                query, function (err, results) {
                                    if (err) throw err;
                                    let roleArr = results.map(({ title, role_ID }) => ({
                                        name: `${title}`,
                                        value: `${role_ID}`
                                    }))
                                    console.log(roleArr)
                                    inquirer
                                        .prompt({
                                            name: 'role_ID',
                                            type: 'list',
                                            message: 'What is the employee\'s new role?',
                                            choices: roleArr
                                        }).then(function (roleID) {
                                            console.log(empID.id, roleID.role_ID)
                                            let query = 'UPDATE employee SET role_FK = ? WHERE employee_ID = ?';
                                            let data = [roleID.role_ID, empID.id]
                                            conn.query(
                                                query, data, function (err, results) {
                                                    if (err) throw err;
                                                    console.log("Employee role has been updated!");
                                                });
                                            nextQuestion();
                                        })
                                }
                            );
                        });
                    });
            }
        )
    })



};

function addEmployee() {
    inquirer
        .prompt(
            [{
                name: 'first_name',
                type: 'input',
                message: `What Is The Employee's First Name?`
            },
            {
                name: 'last_name',
                type: 'input',
                message: `What Is The Employee's Last Name?`
            },
            {
                name: 'role',
                type: 'list',
                message: `What Is The Employee's Role?`,
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
            }]
        )
        .then(function (answer) {
            console.log(answer);
            query.getRoleID(answer);
        });
};

function nextQuestion() {
    inquirer
        .prompt({
            name: 'action',
            type: 'rawlist',
            message: 'What Would You Like To Do?',
            choices: [
                'Return To The Main Menu',
                'Exit Application'
            ]
        })
        .then(function (answer) {
            console.log(answer)
            switch (answer.action) {
                case 'Return To The Main Menu':
                    startCMS();
                    break;
                case 'Exit Application':
                    break;
            }
        })
};

exports.nextQuestion = nextQuestion;