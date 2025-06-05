import db from "#db/client";

/** @returns the employee created according to the provided details */
export async function createEmployee({ name, birthday, salary }) {
  // TODO
  console.log(name, birthday, salary);
  const SQL = `INSERT INTO fullstack_employees(name, birthday, salary)
  VALUES($1, $2, $3) RETURNING *;
  `;
  const {
    rows: [employee],
  } = await db.query(SQL, [name, birthday, salary]);
  return employee;
}

// === Part 2 ===

/** @returns all employees */
export async function getEmployees() {
  // TODO
  const SQL = `
  SELECT * FROM fullstack_employees
  `;
  const { rows: employees } = await db.query(SQL);
  return employees;
}

/**
 * @returns the employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function getEmployee(id) {
  // TODO
  const SQL = `SELECT * FROM fullstack_employees WHERE id=$1`;
  const {
    rows: [employee],
  } = await db.query(SQL, [id]);
  return employee;
}

/**
 * @returns the updated employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function updateEmployee({ id, name, birthday, salary }) {
  // TODO
  const SQL = `
  UPDATE fullstack_employees SET name=$2, birthday=$3, salary=$4 WHERE id=$1 RETURNING *`;
  const {
    rows: [employee],
  } = await db.query(SQL, [id, name, birthday, salary]);
  return employee;
}

/**
 * @returns the deleted employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function deleteEmployee(id) {
  // TODO
  const SQL = `
  DELETE FROM fullstack_employees WHERE id =$1 RETURNING*`;
  const {
    rows: [employee],
  } = await db.query(SQL, [id]);
  return employee;
}
