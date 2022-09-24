const mongoose = require("mongoose")

const careersSchema = mongoose.Schema({
 JobId:{
type:Number
 },
    JobType:{
        type:String,
      
    },
    JobTitle:{
        type:String,
      
    },
    RequiredSkill:{
        type:String,
      
    },
    ExperienceRequired:{
        type:String,
    },
    JobDescription:{
        type:String
    },
    Responsibilities:{
        type:String
    },
    RequiredQualification:{
        type:String
    }

},{
timestamps:true
})
module.exports = mongoose.model("careers",careersSchema)