const mongoose = require("mongoose")

const ProjectSchema = mongoose.Schema({
    ProjectId:{
        type:Number,
      
    },
    Customer:{
        type:String,
      
    },
    ProjectName:{
        type:String,
      
    },
    ProjectLink:{
        type:String,
      
    },
    Status:{
        type:String,
      
    },
},{
timestamps:true
})
module.exports = mongoose.model("project",ProjectSchema)