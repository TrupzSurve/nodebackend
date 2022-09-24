const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const employeeSchema = new mongoose.Schema({
  Profile: String,
  EmployeeId: {
    type: String
  },
  JoiningDate: {
    type: String
  },
  FirstName: {
    type: String
  },
  LastName: {
    type: String
  },
  FatherName: {
    type: String
  },
  ContactNumber: {
    type: String
  },
  DateOfBirth: {
    type: String
  },
  Gender: {
    type: String
  },
  MaritalStatus: {
    type: String
  },
  BloodGroup: {
    type: String
  },
  Country: {
    type: String
  },
  CurrentAddress: {
    type: String
  },
  PermanantAddress: {
    type: String
  },
  Department: {
    type: String
  },
  Role: {
    type: String
  },
  PanCard: {
    type: String
  },
  EmailId: {
    type: String
  },
  Password: {
    type: String
  },
  ConfirmDate: {
    type: String
  },
  ReportingTo: {
    type: String
  },
  MiddleName: {
    type: String
  },
  AadharCardNumber: {
    type: String
  },
  AadharEnrollmentNumber: {
    type: String
  },
  BankName: {
    type: String
  },
  BankAccountNumber: {
    type: String
  },
  IFSCCode: {
    type: String
  },
  SecondarySchoolName: {
    type: String
  },
  SecondarySchoolPassingYear: {
    type: String
  },
  SecondarySchoolPercentage: {
    type: String
  },
  SrSecondarySchoolName: {
    type: String
  },
  SrSecondarySchoolPassingYear: {
    type: String
  },
  SrSecondarySchoolPercentage: {
    type: String
  },
  GradutionCollageName: {
    type: String
  },
  GradutionCollagePassingYear: {
    type: String
  },
  GradutionCollagePercentage: {
    type: String
  },
  PostGraduationCollageName: {
    type: String
  },
  PostGraduationCollagePassingYear: {
    type: String
  },
  PostGraduationCollagePercentage: {
    type: String
  },
  Company1Name: {
    type: String
  },
  Company1Designation: {
    type: String
  },
  Company1JobJoinFrom: {
    type: String
  },
  Company1JobTo: {
    type: String
  },
  Company2Name: {
    type: String
  },
  Company2Designation: {
    type: String
  },
  Company2JobJoinFrom: {
    type: String
  },
  Company2JobTo: {
    type: String
  },
  Company3Name: {
    type: String
  },
  Company3Designation: {
    type: String
  },
  Company3JobJoinFrom: {
    type: String
  },
  Company3JobTo: {
    type: String
  }
});

employeeSchema.pre("save", async function (next) {
  try {
    const hashPassword = await bcrypt.hash(this.Password, 10);
    this.Password = hashPassword;
    console.log(this.Password);
    next();
  } catch (error) {
    next(error);
  }
});

const employeeModel = mongoose.model("employeeDetails", employeeSchema);

module.exports = employeeModel;

