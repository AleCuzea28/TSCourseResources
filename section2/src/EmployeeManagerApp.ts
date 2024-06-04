export type Employee = {
  id: number;
  name: string;
  email: string;
  salary: number;
};

const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const addEmployee = (givenName: string, givenSalary: number): Employee => {
  return {
    id: getRandomInt(1000, 9999),
    name: givenName,
    email: `${givenName}@coolcompany.com`, //very cool
    salary: givenSalary,
  };
};

const sendWelcomeEmail = (employee: Employee) => {
  console.log(`message sent to ${employee.email}`);
  console.log("--------------------------------");
  console.log("Welcome on board!!!\n");
};

//example
const John = addEmployee("John", 4000);
const Ella = addEmployee("Ella", 8000);

const newEmployees = [John, Ella];
newEmployees.forEach((employee) => sendWelcomeEmail(employee));
