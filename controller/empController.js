const employeeModel = require("../model/empmodel");
const leaveModel = require("../model/leaveModel");
const cloudinary = require("../config/cloudinary");
const attendanceModel = require("../model/attendanceModel");


//______________________________ Employee Dashboard ___________________________


//------------------ Register Empolyee -----------------------------

exports.register = (req, res) => {
    const details = new employeeModel({
        EmployeeId: "EM-SM"+Math.floor((Math.random()*10000)+1),
        JoiningDate: req.body.JoiningDate,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        FatherName: req.body.FatherName,
        ContactNumber: req.body.ContactNumber,
        DateOfBirth: req.body.DateOfBirth,
        Gender: req.body.Gender,
        MaritalStatus: req.body.MaritalStatus,
        BloodGroup: req.body.BloodGroup,
        Country: req.body.Country,
        CurrentAddress: req.body.CurrentAddress,
        PermanantAddress: req.body.PermanantAddress,
        Department: req.body.Department,
        Role: req.body.Role,
        PanCard: req.body.PanCard,
        EmailId: req.body.EmailId,
        Password: req.body.Password,
    });

    details.save((err) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Register Employee Sucessfully!");
        }
    })

}

//------------------ Fetch All Employees Details-------------

exports.getAll = (req, res) => {

    employeeModel.find({}, (err, result) => {
        res.send(result);
    });

}


//------------------ Fetch One Employee with EmployeeId --------------------------

exports.getOne = (req,res) => {
    const ID = req.params.employeeId;

    employeeModel.findOne({EmployeeId: ID},(err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    });
}

//------------------ Update employee details -----------------------------
exports.update = (req, res) => {
    var ID = req.params.employeeId;

    var details = {
        EmailId: req.body.EmailId,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        ContactNumber: req.body.ContactNumber
    }

    employeeModel.findOneAndUpdate({ EmployeeId: ID }, details, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Employee Details with EmployeeID " + ID + " Updated Sucessfully!");
        }
    });
}


//------------------ Update Profile Details ----------------

exports.updateProfile = async (req, res) => {
    var ID = req.params.employeeId;

    const result = await cloudinary.uploader.upload(req.file.path,{folder:"EmployeeProfile",use_filename : true, unique_filename : false});

    var details = {
        Profile: result.secure_url,
        EmployeeId: req.body.EmployeeId,
        Department: req.body.Department,
        Role: req.body.Role,
        JoiningDate: req.body.JoiningDate,
        ConfirmDate: req.body.ConfirmDate,
        EmailId: req.body.EmailId,
        ReportingTo: req.body.ReportingTo,
        FirstName: req.body.FirstName,
        MiddleName: req.body.MiddleName,
        LastName: req.body.LastName,
        FatherName: req.body.FatherName,
        ContactNumber: req.body.ContactNumber,
        DateOfBirth: req.body.DateOfBirth,
        Gender: req.body.Gender,
        MaritalStatus: req.body.MaritalStatus,
        BloodGroup: req.body.BloodGroup,
        Country: req.body.Country,
        CurrentAddress: req.body.CurrentAddress,
        PermanantAddress: req.body.PermanantAddress,
        PanCard: req.body.PanCard,
        AadharCardNumber: req.body.AadharCardNumber,
        AadharEnrollmentNumber: req.body.AadharEnrollmentNumber,
        BankName: req.body.BankName,
        BankAccountNumber: req.body.BankAccountNumber,
        IFSCCode: req.body.IFSCCode,
    }
    employeeModel.findOneAndUpdate({ EmployeeId: ID }, details, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Employee Details with EmployeeID " + ID + " Updated Sucessfully!");
        }
    });
}


//------------------ Update education details ---------------
exports.updateEducation = (req, res) => {
    var ID = req.params.employeeId;

    var details = {
        SecondarySchoolName: req.body.SecondarySchoolName,
        SecondarySchoolPassingYear: req.body.SecondarySchoolPassingYear,
        SecondarySchoolPercentage: req.body.SecondarySchoolPercentage,
        SrSecondarySchoolName: req.body.SrSecondarySchoolName,
        SrSecondarySchoolPassingYear: req.body.SrSecondarySchoolPassingYear,
        SrSecondarySchoolPercentage: req.body.SrSecondarySchoolPercentage,
        GradutionCollageName: req.body.GradutionCollageName,
        GradutionCollagePassingYear: req.body.GradutionCollagePassingYear,
        GradutionCollagePercentage: req.body.GradutionCollagePercentage,
        PostGraduationCollageName: req.body.PostGraduationCollageName,
        PostGraduationCollagePassingYear: req.body.PostGraduationCollagePassingYear,
        PostGraduationCollagePercentage: req.body.PostGraduationCollagePercentage
    }

    employeeModel.findOneAndUpdate({ EmployeeId: ID }, details, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Employee Details with EmployeeID " + ID + " Updated Sucessfully!");
        }
    });
}


//------------------ Update experience details ----------------
exports.updateExperience = (req, res) => {
    var ID = req.params.employeeId;

    var details = {
        Company1Name: req.body.Company1Name,
        Company1Designation: req.body.Company1Designation,
        Company1JobJoinFrom: req.body.Company1JobJoinFrom,
        Company1JobTo: req.body.Company1JobTo,
        Company2Name: req.body.Company2Name,
        Company2Designation: req.body.Company2Designation,
        Company2JobJoinFrom: req.body.Company2JobJoinFrom,
        Company2JobTo: req.body.Company2JobTo,
        Company3Name: req.body.Company3Name,
        Company3Designation: req.body.Company3Designation,
        Company3JobJoinFrom: req.body.Company3JobJoinFrom,
        Company3JobTo: req.body.Company3JobTo
    }

    employeeModel.findOneAndUpdate({ EmployeeId: ID }, details, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Employee Details with EmployeeID " + ID + " Updated Sucessfully!");
        }
    });
}


//------------------- Delete One Employee -----------------------
exports.delete = (req, res) => {
    var ID = req.params.employeeId;

    employeeModel.deleteOne({ EmployeeId: ID }, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Employee with EmployeeID " + ID + " Deleted Sucessfully!");
        }
    });
}





//_________________________________ Attendance System ________________________________

exports.submitAttendance = async (req,res) => {
     
    const result = await cloudinary.uploader.upload(req.file.path,{folder:"EmployeeAttendance",use_filename : true, unique_filename : false});

     const attendance = new attendanceModel({
        LivePicture: result.secure_url,
        EmployeeId: req.body.EmployeeId,
        Department: req.body.Department,
        Role: req.body.Role,
        Name: req.body.Name,
        Date: req.body.Date,
        Time: req.body.Time,
        Month: req.body.Month,
        AttendanceCheckout: req.body.AttendanceCheckout
     });

     attendance.save((err)=>{
        if(err){
            res.send(err);
        }else{
            res.send("Attendance Submited Sucessfully!");
        }
     });
}



//__________________________________ Leave Section ___________________________________


exports.applyForLeave = (req, res) => {

    let Form = new leaveModel({
        EmployeeId: req.params.employeeId,
        LeaveType: req.body.LeaveType,
        LeaveDescription: req.body.LeaveDescription,
        LeaveFrom: req.body.LeaveFrom,
        LeaveTo: req.body.LeaveTo,
        Status: "A Waiting Approvel"
    });

    Form.save((err) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Leave Form Submited Successfully!");
        }
    });
}


exports.checkLeaveHistory = (req, res) => {
    const ID = req.params.employeeId;

    leaveModel.findOne({ EmployeeId: ID }, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
}


exports.acceptLeaveApplication = (req, res) => {
    const ID = req.params.employeeId;

    const status = {
        Status: "Approved"
    }

    leaveModel.findOneAndUpdate({ EmployeeId: ID }, status, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send("LeaveForm Approved Sucessfully!");
        }
    });
}


exports.rejectLeaveApplication = (req, res) => {
    const ID = req.params.employeeId;

    const status = {
        Status: "Not Approved"
    }

    leaveModel.findOneAndUpdate({ EmployeeId: ID }, status, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send("LeaveForm Not-Approved");
        }
    });
}
