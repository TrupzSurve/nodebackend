const mongoose = require("mongoose")

const AnnounceMentSchema = mongoose.Schema({
    AnnouncementId:{
        type:Number,
      
    },
    Topic:{
        type:String,
      
    },
    PublishedDate:{
        type:String,
      
    },
    Status:{
        type:String,
      
    },
    Description:{
        type:String,
      
    },
    Role:{
        type:String,
      
    },
},{
timestamps:true
})
module.exports = mongoose.model("AnnounceMent",AnnounceMentSchema)