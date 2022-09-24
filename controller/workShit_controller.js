const WorkShift = require("../model/workShift_model")
exports.createWorkShift = async(req,res)=>{
 try {
    const result = await WorkShift.create({
        workShiftId:Math.floor((Math.random()*100000)+1),
        ShiftId:req.body.ShiftId,
        EmployeeId:req.body.EmployeeId,
        DepartmentId:req.body.DepartmentId,
        Date:req.body.Date,    
     })
     res.json({
        success:true,
        message: "WorkShift Created Successfully",
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
exports.viewWorkShift = async(req,res)=>{
    try {
        const result = await WorkShift.aggregate([
            {
$lookup:{
    from:"employees",
    localField:"EmployeeId",
    foreignField:"EmployeeId",
    as:"Employee"
}
            },
            {
                $lookup:{
                    from:"departments",
                    localField:"DepartmentId",
                    foreignField:"DepartmentId",
                    as:"Department"
                }
                          },
                            {
                                $lookup:{
                                    from:"shifts",
                                    localField:"ShiftId",
                                    foreignField:"ShiftId",
                                    as:"Shift"
                                }
                                            }
        ]) 
        res.json({
            count:result.length,
            success:true,
            message:"get WorkShift Details",
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
exports.deleteWorkShiftDetails = async(req,res)=>{
    try {
        const result = await WorkShift.findOneAndDelete({workShiftId:req.params.workShiftId})
        res.json({
            success:true,
            message:"Delete WorkShift Details",
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
exports.updateWorkShiftDetails = async(req,res)=>{
    try {
        const result = await WorkShift.findOneAndUpdate({workShiftId:req.body.workShiftId} , req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update WorkShift Details",
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