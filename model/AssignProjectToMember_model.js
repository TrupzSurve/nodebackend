const mongoose = require("mongoose")

const assignProjectToMemberSchema = mongoose.Schema({
 AssignProjectId:{
    type:Number
 },
    ProjectId:{
        type:Number,
      
    },
    TeamMember:{
        type:String
    },
    LeadEmployeeId:{
        type:String
    },
    ProjectAdmin:{
        type:String,
      
    },
    BeginDate:{
        type:String
    },
    EndDate:{
        type:String
    },
    ProjectDetails:{
        type:String
    },
    Description:{
        type:String
    }

},{
timestamps:true
})
module.exports = mongoose.model("assignProjectToMember",assignProjectToMemberSchema)