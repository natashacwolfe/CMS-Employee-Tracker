const db = require('./database');
const nextQuestion = require('./cms');
var cTable = require('console.table');
const query = require('./Queries');


class Employee {
    constructor(first_name, last_name, role_fk){
        this.first_name = first_name,
        this.last_name = last_name,
        this.role_fk = role_fk
    };

    addEmployeeDB(employee, role) {
        db.getConnection((err, conn) => {
            conn.query(
                'INSERT INTO employee SET ?',
                {
                    first_name: employee.first_name,
                    last_name: employee.last_name,
                    role_fk: role
                },
                function(err) {
                    if (err) throw err;
                    console.log(`${employee.first_name} ${employee.last_name} Has Been Added.`);
                    nextQuestion.nextQuestion();
                }
            )
        })
    };


};

module.exports = new Employee();