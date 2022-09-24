const leave = require("../model/leave_model")
exports.createleave = async(req,res)=>{
 try {
    const result = await leave.create({
        leaveId:Math.floor((Math.random()*100000)+1),
        EmployeeId:req.body.EmployeeId,
        leaveType:req.body.leaveType,
        FormDate:req.body.FormDate,
        ToDate:req.body.ToDate,
        PostingDate:req.body.PostingDate,
        ApporveByHR:req.body.ApporveByHR,
        AdminStatus:req.body.AdminStatus,
    
     })
     res.json({
        success:true,
        message: "leave Created Successfully",
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
exports.viewleave = async(req,res)=>{
    try {
        const result = await leave.aggregate([
            {
                $lookup:{
                    from:"employees",
                    localField:"EmployeeId",
                    foreignField:"EmployeeId",
                    as:"Employee"
                }
            }
        ]) 
        res.json({
            count:result.length,
            success:true,
            message:"get leave Details",
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
exports.deleteleaveDetails = async(req,res)=>{
    try {
        const result = await leave.findOneAndDelete({leaveId:req.params.leaveId})
        res.json({
            success:true,
            message:"Delete leave Details",
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
exports.updateleaveDetails = async(req,res)=>{
    try {
        const result = await leave.findOneAndUpdate({leaveId:req.body.leaveId} , req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update leave Details",
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