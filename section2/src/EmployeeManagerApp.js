var employees = [];
var getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var addEmployee = function (givenName, givenEmail, givenSalary) {
    var newEmployee = {
        id: getRandomInt(1000, 9999),
        name: givenName,
        email: givenEmail,
        salary: givenSalary,
    };
    employees.push(newEmployee);
};
var sendWelcomeEmail = function (givenEmail) {
    console.log("message sent to " + givenEmail);
    console.log("--------------------------------");
    console.log("Welcome on board!!!\n");
};
var sendEmailToAll = function () {
    employees.forEach(function (employee) {
        sendWelcomeEmail(employee.email);
    });
};
//example
addEmployee("John", "john@gmail.com", 4000);
addEmployee("Ella", "ella@gmail.com", 8790);
addEmployee("Dab", "dabb@gmail.com", 2040);
addEmployee("Sellah", "sel@gmail.com", 6500);
sendEmailToAll();
