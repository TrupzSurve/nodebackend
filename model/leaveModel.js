const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema({
    EmployeeId: {
      type: String
    },
    LeaveType: {
        type: String
    },
    LeaveDescription: {
        type: String
    },
    LeaveFrom: {
        type: String
    },
    LeaveTo: {
        type: String
    },
    Status: {
        type: String
    }
});

const leaveModel = mongoose.model("LeaveForm",leaveSchema);

module.exports = leaveModel;