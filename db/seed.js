import db from "#db/client";
import { createEmployee } from "#db/queries/employees";
import { faker } from "@faker-js/faker";
await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

function createRandomEmployees() {
  // TODO
  return {
    name: faker.person.firstName(),
    birthday: faker.date.birthdate(),
    salary: faker.number.int({ min: 80000, max: 300000 }),
  };
}

async function seedEmployees() {
  const randomEmployees = Array.from({ length: 10 }, createRandomEmployees);
  const result = await Promise.allSettled(
    randomEmployees.map(async (employee) => {
      await createEmployee(employee);
    })
  );
  console.log(result);
}

// const employees = [
//   {
//     name: "Jennifer",
//     birthday: 1990 - 7 - 30,
//     salary: Math.random() * (50 - 20 + 1) * 200,
//   },
//   { name: "Carol", birthday: 2002 - 4 - 2, salary: 100000 },
//   { name: "George", birthday: 1998 - 5 - 14, salary: 85000 },
//   { name: "Maddie", birthday: 1994 - 8 - 15, salary: 120000 },
//   { name: "Hope", birthday: 1980 - 9 - 14, salary: 72000 },
//   { name: "Fred", birthday: 2002 - 4 - 18, salary: 100000 },
//   { name: "Harry", birthday: 1991 - 11 - 21, salary: 85000 },
//   { name: "Alyssa", birthday: 1987 - 6 - 5, salary: 120000 },
//   { name: "Heather", birthday: 2005 - 9 - 9, salary: 72000 },
//   { name: "Monique", birthday: 1982 - 12 - 23, salary: 72000 },
// ];

//use faker for fake data//

// Promise.all(employees.map(createEmployee));
