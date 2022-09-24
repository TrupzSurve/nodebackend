const ProjectToAssignMember = require("../model/AssignProjectToMember_model")
exports.createProjectToAssignMember = async(req,res)=>{
try {
    const result = await ProjectToAssignMember.create({
        AssignProjectId:Math.floor(Math.random()*10000),
        ProjectId :req.body.ProjectId,
        TeamMember :req.body.TeamMember,
        LeadEmployeeId :req.body.LeadEmployeeId,
        ProjectAdmin :req.body.ProjectAdmin,
        BeginDate :req.body.BeginDate,
        EndDate :req.body.EndDate,
        ProjectDetails :req.body.ProjectDetails,
        Description :req.body.Description,
      
       
    })
    res.json({
        success:true,
        message:"Create Project  To Assign Member Details",
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
exports.GetAllProjectToAssignMember = async(req,res)=>{
    try {
        const result = await ProjectToAssignMember.aggregate([
            {
$lookup:{
    from:"employees",
    localField:"LeadEmployeeId",
    foreignField:"EmployeeId",
    as:"Employee"
}
            }
        ]) 
        res.json({
            count:result.length,
            success:true,
            message:"get All Project To Assign Member Details",
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
exports.deleteProjectToAssignMember = async(req,res)=>{
        try {
            const result = await ProjectToAssignMember.findOneAndDelete({AssignProjectId:req.params.AssignProjectId})
            res.json({
                success:true,
                message:"delete ProjectToAssignMember Details",
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
        exports.updateProjectToAssignMemberDetails = async(req,res)=>{
            try {
                const result = await ProjectToAssignMember.findOneAndUpdate({AssignProjectId:req.body.AssignProjectId} , req.body , {
                    new: true,
                    runValidators: true,})
                res.json({
                    success:true,
                    message:"update Project To Assign Member Details",
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
