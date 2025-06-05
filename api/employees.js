import express from "express";
const router = express.Router();
export default router;

import {
  createEmployee,
  getEmployee,
  getEmployees,
  updateEmployee,
  deleteEmployee,
} from "#db/queries/employees";

// TODO: this file!

//welcome homepage
router.route("/").get(async (req, res) => {
  res.send = "Welcome to the FullStack Employees API!";
});
//get employees
router.route("/employees").get(async (req, res) => {
  const employees = await getEmployees();
  res.send(employees);
});
/**
POST /employees
Sends 400 if request body is not provided
Sends 400 if request body is missing a required field
Sends the newly created employee with status 201
 */
router.route("/employees").post(async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: " Please provide a request body." });
  }

  const { name, birthday, salary } = req.body;
  if (!name || !bithday || !salary) {
    return res
      .status(400)
      .json({ message: "Body is missing a required field." });
  }
  const newEmployee = await createEmployee({ name, birthday, salary });
  res.status(201).json({ message: "New employee created" });
});
/**
GET /employees/:id
Sends 400 if provided id is not a positive integer
Sends 404 if employee does not exist
Sends employee with specified ID
 */
router.route("/employees/:id").get(async (req, res) => {
  const employeeId = await getEmployee(id);
  // --------- HELP - Sends 400 if provided id is not a positive integer

  if (!employeeId) {
    return res
      .status(400)
      .json({ message: "Employee with given id does not exist." });
  }
});

/**
DELETE /employees/:id
Sends 400 if provided id is not a positive integer
Sends 404 if employee does not exist
Deletes the specified employee and sends status 204
 */
router.route("/employees/:id").delete(async (req, res) => {
  if (!deleteEmployeeId) {
    return res.status(400).json({ message: "Employee does not exist." });
  }
  const deleteEmployeeId = await deleteEmployee(id);
  return res.status(204).send({ message: "Employee deleted." });
});

// --------- HELP - what are the differences between this and the solution code below?
//Why is line 70 with 'const' and the 'return' unnecessary?
/**
    .delete(async (req, res) => {
    await deleteEmployee(req.employee.id);
    res.sendStatus(204);
  })
 */

/**PUT /employees/:id updates employee with specified ID with provided data
Sends 400 if request body is not provided
Sends 400 if request body is missing a required field
Sends 400 if provided id is not a positive integer
Sends 404 if employee does not exist
Updates and sends the employee with status 200 */

router.route("employees/:id").put(async (req, res) => {
  if (!req.body) {
    return res.status(400)({ message: "Body is required." });
  }

  const { name, birthday, salary } = req.body;
  if (!name || !birthday || !salary) {
    return res.status(400)({
      message: "Please enter a name, birthday, or salary.",
    });
  }
  //Sends 404 if employee does not exist?
  if (!employee) {
    return res.status(400).json({ message: "Employee does not exist." });
  }
  const updatedEmployee = await updateEmployee({ id, name, birthday, salary });
  res.send(updatedEmployee);
  return res.send(200).json({ message: "Employee recorded updated." });
});
