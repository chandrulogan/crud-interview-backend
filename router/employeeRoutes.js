const express = require('express');
const router = express.Router()
const employeeControllers = require('./../controllers/employeeController')

router.route('/add-employee').post(employeeControllers.addEmployee) //create
router.route('/view-employee/:adminId').get(employeeControllers.viewMyEmployees) //read
router.route('/view-indi-employee/:userId').get(employeeControllers.findIndiEmployee) // individual employee
router.route('/edit-employee/:userId').put(employeeControllers.editEmployeeInfo) // Edit employee data

module.exports = router