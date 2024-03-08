const Employee = require("../model/employeeModel")


// this will find the employee
exports.findIndiEmployee = async (req, res) => {
    try {
        const { userId } = req.params

        const myEmployee = await Employee.findById({ _id: userId })

        if (myEmployee) {
            res.status(200).json({
                status: "success",
                myEmployee: myEmployee
            })
        } else {
            res.status(401).json({
                status: "success",
                message: "Invalid id"
            })
        }
    } catch (error) {
        res.status(500).json({
            status: "success",
            message: "Internal server error"
        })
    }
}

// this will show employee I have created
exports.viewMyEmployees = async (req, res) => {
    try {
        const { adminId } = req.params

        const myEmployees = await Employee.find({ adminId })

        if (myEmployees.length === 0) {
            res.status(500).json({
                status: "success",
                message: "No Employees available"
            })
        } else {
            res.status(201).json({
                status: "success",
                myEmployees
            })
        }
    } catch (error) {
        res.status(500).json({
            status: "success",
            message: "Internal server error"
        })
    }
}

// using this we can add the new employee
exports.addEmployee = async (req, res) => {
    try {
        const newEmployee = await Employee.create({
            adminId: req.body.adminId,
            name: req.body.name,
            email: req.body.mail,
            mobileNumber: req.body.mobileNumber,
            department: req.body.department,
            designation: req.body.designation
        })

        res.status(200).json({
            status: "success",
            data: {
                newEmployee
            }
        })
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: error
        })
    }
}

// using this we can edit the employee data
exports.editEmployeeInfo = async (req, res) => {
    try {
        const { userId } = req.params

        const findMyEmployee = await Employee.findById({ _id: userId })

        if (!findMyEmployee) {
            return res.status(404).json({
                status: "fail",
                message: "Employee id not matched with the current data"
            })
        }

        const editEmployeeInfo = await Employee.updateOne(
            { _id: userId },
            {
                name: req.body.name,
                email: req.body.mail,
                mobileNumber: req.body.mobileNumber,
                department: req.body.department,
                designation: req.body.designation
            }
        )

        res.status(200).json({
            status: "success",
            editEmployeeInfo
        })

    } catch (error) {
        res.status(500).json({
            status: "success",
            message: "Internal server error"
        })
    }
}

// using this we can delete the employee record
exports.deleteEmployeeInfo = async (req, res) => {
    try {
        const { userId } = req.params

        const deletetedEmployee = await Employee.deleteOne({ _id: userId })

        res.status(200).json({
            status: "success",
            message: "Data deleted successfully",
            deletetedEmployee
        })

    } catch (error) {
        res.status(500).json({
            status: "success",
            message: "Internal server error"
        })
    }
}