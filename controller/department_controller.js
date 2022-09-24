const Department = require("../model/Department_model")
exports.createDepartment = async(req,res)=>{
 try {
    const result = await Department.create({
        DepartmentId:Math.floor((Math.random()*100000)+1),
        DepartMentCode:req.body.DepartMentCode,
        DepartmentName:req.body.DepartmentName,
     })
     res.json({
        success:true,
        message: "Department Created Successfully",
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
exports.viewDepartment = async(req,res)=>{
    try {
        const result = await Department.find() 
        res.json({
            count:result.length,
            success:true,
            message:"get Department Details",
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
exports.deleteDepartmentDetails = async(req,res)=>{
    try {
        const result = await Department.findOneAndDelete({DepartmentId:req.params.DepartmentId})
        res.json({
            success:true,
            message:"Delete Department Details",
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
exports.updateDepartmentDetails = async(req,res)=>{
    try {
        const result = await Department.findOneAndUpdate({DepartmentId:req.body.DepartmentId} , req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update Department Details",
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