const EventApplication = require("../model/event_Application_model")
exports.CreateEventApplicationDetails = async(req,res)=>{
 try {
    const result = await EventApplication.create({
        EventApplicationId:Math.floor((Math.random()*100000)+1),
        EventTitle:req.body.EventTitle,
        ApplicantName:req.body.ApplicantName,
        Mobile:req.body.Mobile,
        Email:req.body.Email,
        Organization:req.body.Organization,
        JoinAS:req.body.JoinAS,
        Status:req.body.Status,
        
     })
     res.json({
        success:true,
        message: "Event Application Created Successfully",
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
exports.ViewEventApplication = async(req,res)=>{
    try {
        const result = await EventApplication.find() 
        res.json({
            count:result.length,
            success:true,
            message:"get Event Application Details",
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
exports.deleteEventApplicationDetails = async(req,res)=>{
    try {
        const result = await EventApplication.findOneAndDelete({EventApplicationId:req.params.EventApplicationId})
        res.json({
            success:true,
            message:"Delete Event Application Details",
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
exports.updateEventApplicationDetails = async(req,res)=>{
    try {
        const result = await EventApplication.findOneAndUpdate({EventApplicationId:req.body.EventApplicationId} , req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update EventApplication Details",
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