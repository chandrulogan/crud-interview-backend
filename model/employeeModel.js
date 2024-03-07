const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"]
        },
        email: {
            type: String,
            required: [true, "Email is required"]
        },
        mobileNumber: {
            type: String,
            required: [true, "mobileNumber is required"]
        },
        department: {
            type: String,
            required: [true, "department is mandatory"],
            minlength: 8,
            select: false
        },
        designation: {
            type: String,
            required: [true, "designation is  required"],
        },
        adminId:{
            type: String,
            required: [true, "user id not available"]
        }
    },
    { timestamps: true }
)

const Employee = mongoose.model('Employee', employeeSchema)
module.exports = Employee