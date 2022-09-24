const AnnounceMent = require("../model/Announcement_model")
exports.CreateAnnounceMent = async(req,res)=>{
 try {
    const result = await AnnounceMent.create({
        AnnouncementId:Math.floor((Math.random()*100000)+1),
        Topic:req.body.Topic,
        PublishedDate:req.body.PublishedDate,
        Status:req.body.Status,
        Description:req.body.Description,
        Role:req.body.Role,
     })
     res.json({
        success:true,
        message: "AnnounceMent Created Successfully",
        data:result
     })
 } catch (error) {
    res.json({
        success:false,
        message: `Something went worng `+ {error},
        data:null
     })
 }
}
exports.viewAnnounceMent = async(req,res)=>{
    try {
        const result = await AnnounceMent.find() 
        res.json({
            count:result.length,
            success:true,
            message:"get AnnounceMent Details",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message: `Something went worng `+ {error},
            data:null
         })
    }
}
exports.deleteAnnounceMentDetails = async(req,res)=>{
    try {
        const result = await AnnounceMent.findOneAndDelete({AnnouncementId:req.params.AnnouncementId})
        res.json({
            success:true,
            message:"Delete AnnounceMent Details",
            data:null
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong",
            data:null
        })  
    }
}
exports.updateAnnounceMentDetails = async(req,res)=>{
    try {
        const result = await AnnounceMent.findOneAndUpdate({AnnouncementId:req.body.AnnouncementId} , req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update AnnounceMent Details",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong"+Error,
            data:null
        })  
    }
}