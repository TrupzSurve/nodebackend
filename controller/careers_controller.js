const careers = require("../model/careers_model")
exports.createCareers = async(req,res)=>{
    try {
       const result = await careers.create({
        JobId:Math.floor((Math.random()*100000)+1),
        JobType:req.body.JobType,
        JobTitle:req.body.JobTitle,
        RequiredSkill:req.body.RequiredSkill,
        ExperienceRequired:req.body.ExperienceRequired,
        JobDescription:req.body.JobDescription,
        Responsibilities:req.body.Responsibilities,
        RequiredQualification:req.body.RequiredQualification,
        })
        res.json({
           success:true,
           message: "careers Created Successfully",
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
   exports.viewCareers = async(req,res)=>{
       try {
           const result = await careers.find() 
           res.json({
               count:result.length,
               success:true,
               message:"get careers Details",
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
   exports.deleteCareersDetails = async(req,res)=>{
       try {
           const result = await careers.findOneAndDelete({JobId:req.params.JobId})
           res.json({
               success:true,
               message:"Delete careers Details",
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
   exports.updatCareersDetails = async(req,res)=>{
       try {
           const result = await careers.findOneAndUpdate({JobId:req.body.JobId} , req.body , {
               new: true,
               runValidators: true,})
           res.json({
               success:true,
               message:"update Careers Details",
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