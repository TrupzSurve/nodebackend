const express = require('express')
const app = express()
const swaggerUI =require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc');
const env = require("dotenv")
env.config({path:"./config/.env"})
const cors =require("cors")
const db = require("./config/db")
db()
app.use(express.json())
app.use(express.static('public'));
app.use(cors())
const employeeTask = require('./Routes/employeeTask_routes')
const Appraisal = require('./Routes/Appraisal_routes')
const travelRequest = require('./Routes/Appraisal_routes')
const TrainingSchedule = require('./Routes/TrainingSchedule_routes')
const AssignManager = require('./Routes/AssignManager_routes')
const admin = require("./Routes/admin_routes")
const group = require("./Routes/group_routes")
const origanization = require("./Routes/organization_routes")
const Shift = require('./Routes/Shift_routes')
const Announcement = require('./Routes/AnnounceMent_route')
const Leave = require('./Routes/leave_routes');
const Department = require('./Routes/departMent_routes');
const holiday = require('./Routes/holiday_routes');
const workShift = require('./Routes/workShift_routes');
const Project = require('./Routes/workShift_routes');
const ProjectToAssignMember = require('./Routes/AssignProjectToMember_routes');
const Event = require('./Routes/Event_routes');
const forgotPasswordAdmin = require('./Routes/forgotPassword_routes');
const salary = require('./Routes/salary_routes');
const employee = require('./Routes/employees');
const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Espare Matrix Solution API",
        version: "1.0.0",
        description: "A simple Express Library API",
       
      },
  
      servers: [
        {
          url: "http://localhost:5000",
          description: "Espare Documentation",
        },
      ],
    },
    apis: ["./Routes/*.js"],
  };
  
  const specs = swaggerJsDoc(options);
  app.use("/api-docs-HR", swaggerUI.serve, swaggerUI.setup(specs));
  app.use("/api/v1",employeeTask)
  app.use("/api/v1",Appraisal)
  app.use("/api/v1",travelRequest)
  app.use("/api/v1",TrainingSchedule)
  app.use("/api/v1",AssignManager)
  app.use("/api/v1",Shift)
  app.use("/api/v1/admin",admin)
app.use("/api/v1/group",group)
app.use("/api/v1",origanization)
app.use("/api/v1",Announcement)
app.use("/api/v1",Leave)
app.use("/api/v1",Department)
app.use("/api/v1",holiday)
app.use("/api/v1",workShift)
app.use("/api/v1",Project)
app.use("/api/v1",ProjectToAssignMember)
app.use("/api/v1",Event)
app.use("/api/v1",forgotPasswordAdmin)
app.use("/api/v1",salary)
app.use("/employee",employee)
app.listen(process.env.PORT, () => console.log(`http://localhost:${process.env.PORT || 4000}`))

