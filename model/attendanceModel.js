const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
      LivePicture: {
        type: String
      },
      EmployeeId: {
        type: String
      },
      Department: {
        type: String
      },
      Role: {
        type: String
      },
      Name: {
        type: String
      },
      Date: {
        type: String
      },
      Time: {
        type: String
      },
      Month: {
        type: String
      },
      AttendanceCheckout: {
        type: String
      }
});

const attendanceModel = mongoose.model("employeeAttendance",attendanceSchema);

module.exports = attendanceModel;