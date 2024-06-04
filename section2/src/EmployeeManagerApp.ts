export type Employee = {
  id: number;
  name: string;
  email: string;
  salary: number;
};

let employees: Employee[] = [];

const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const addEmployee = (
  givenName: string,
  givenEmail: string,
  givenSalary: number
) => {
  const newEmployee: Employee = {
    id: getRandomInt(1000, 9999),
    name: givenName,
    email: givenEmail,
    salary: givenSalary,
  };
  employees.push(newEmployee);
};

const sendWelcomeEmail = (givenEmail: string) => {
  console.log("message sent to " + givenEmail);
  console.log("--------------------------------");
  console.log("Welcome on board!!!\n");
};

const sendEmailToAll = () => {
  employees.forEach((employee) => {
    sendWelcomeEmail(employee.email);
  });
};

//example

addEmployee("John", "john@gmail.com", 4000);
addEmployee("Ella", "ella@gmail.com", 8790);
addEmployee("Dab", "dabb@gmail.com", 2040);
addEmployee("Sellah", "sel@gmail.com", 6500);

sendEmailToAll();
