const Project = require("../model/Project_model")
exports.CreateProjectDetails = async(req,res)=>{
 try {
    const result = await Project.create({
        ProjectId:Math.floor((Math.random()*100000)+1),
        Customer:req.body.Customer,
        ProjectName:req.body.ProjectName,
        ProjectLink:req.body.ProjectLink,
        Status:req.body.Status,
     })
     res.json({
        success:true,
        message: "Project Created Successfully",
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
exports.viewProject = async(req,res)=>{
    try {
        const result = await Project.find() 
        res.json({
            count:result.length,
            success:true,
            message:"get Project Details",
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
exports.deleteProjectDetails = async(req,res)=>{
    try {
        const result = await Project.findOneAndDelete({ProjectId:req.params.ProjectId})
        res.json({
            success:true,
            message:"Delete Project Details",
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
exports.updateProjectDetails = async(req,res)=>{
    try {
        const result = await Project.findOneAndUpdate({ProjectId:req.body.ProjectId} , req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update Project Details",
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