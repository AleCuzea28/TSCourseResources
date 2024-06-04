"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var addEmployee = function (givenName, givenSalary) {
    return {
        id: getRandomInt(1000, 9999),
        name: givenName,
        email: "".concat(givenName, "@coolcompany.com"), //very cool
        salary: givenSalary,
    };
};
var sendWelcomeEmail = function (employee) {
    console.log("message sent to ".concat(employee.email));
    console.log("--------------------------------");
    console.log("Welcome on board!!!\n");
};
//example
var John = addEmployee("John", 4000);
var Ella = addEmployee("Ella", 8000);
var newEmployees = [John, Ella];
newEmployees.forEach(function (employee) { return sendWelcomeEmail(employee); });
