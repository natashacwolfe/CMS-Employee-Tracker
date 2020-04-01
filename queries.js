const db = require('./database');
const nextQuestion = require('./cms');
var cTable = require('console.table');
const Employee = require('./Employee');
const Role = require('./Role');


class Query {

   //view all employee table
    viewAllEmp() {
        db.getConnection((err, conn) => {
            var query = 'SELECT e.employee_ID, e.first_name, e.last_name, r.title, r.salary, d.name FROM employee as e INNER JOIN role as r on e.role_FK = r.role_ID INNER JOIN department as d on r.department_FK = d.department_ID;';
            conn.query(
                query, function(err, results){
                    if (err) throw err;
                    // console.log(results);
                    console.table(results);
                    nextQuestion.nextQuestion();
                }
            );
        });
    };


    //links role id to emp fk
    getRoleID(employee) {
        db.getConnection(function(err, conn) {
        var query = 'SELECT role_ID, title FROM role WHERE title = ?';
        return conn.query(query, employee.role, function(err, result){
            if (err) throw err;
            let role = result[0].role_ID;
            console.log(role, employee);
            Employee.addEmployeeDB(employee, role);
            });
        });
    };



    // view all emp by departments
    viewEmpDepartment(department){
        db.getConnection(function(err, conn) {
            var query = `SELECT e.employee_ID, e.first_name, e.last_name, d.name FROM employee as e INNER JOIN role as r on e.role_FK = r.role_ID INNER JOIN department as d WHERE r.department_FK = d.department_ID AND d.name = "${department.department}"`;
            conn.query(query, function(err, result) {
                if (err) throw err;
                console.table(result);
            })
           
        });
    };

    // View all emp by roles
    viewEmpRole(role){
        db.getConnection(function(err, conn) {
            var query = `SELECT e.employee_ID, e.first_name, e.last_name, r.title, r.salary FROM employee as e left JOIN role as r on e.role_FK = r.role_ID WHERE r.title = '${role.role}'`;
            conn.query(query, function(err, result) {
                if (err) throw err;
                console.table(result);
            })
            nextQuestion.nextQuestion();
        });
    };


};

module.exports = new Query();