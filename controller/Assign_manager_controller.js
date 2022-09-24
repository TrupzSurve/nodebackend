const AssignManager = require("../model/Assign_manager_model")
exports.CreateAssignManager = async(req,res)=>{
try {
    const result = await AssignManager.create({
        AssignManagerId:Math.floor(Math.random()*10000),
        EmployeeId :req.body.EmployeeId,
        EfficiencyEmpolyee :req.body.EfficiencyEmpolyee,
      
       
    })
    res.json({
        success:true,
        message:"Create AssignManager Details",
        data:result,
    })
} catch (error) {
    res.json({
        success:false,
        message:"Something went worng",
        data:null,
    })
}
}
exports.GetAllAssignManager = async(req,res)=>{
    try {
        const result = await AssignManager.aggregate([
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
            message:"get All AssignManager Details",
            data:result,
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something went worng",
            data:null,
        })
    }
    }
exports.deleteAssignManager = async(req,res)=>{
        try {
            const result = await AssignManager.findOneAndDelete({AssignManagerId:req.params.AssignManagerId})
            res.json({
                success:true,
                message:"delete AssignManager Details",
                data:null,
            })
        } catch (error) {
            res.json({
                success:false,
                message:"Something went worng",
                data:null,
            })
        }
        }
        exports.updateAssignManagerDetails = async(req,res)=>{
            try {
                const result = await AssignManager.findOneAndUpdate({AssignManagerId:req.body.AssignManagerId} , req.body , {
                    new: true,
                    runValidators: true,})
                res.json({
                    success:true,
                    message:"update AssignManager Details",
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
