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
});
