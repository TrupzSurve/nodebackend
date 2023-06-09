const multer = require("multer");

const storage = multer.diskStorage({
   filename : function(req, file, cb){
     cb(null, Date.now()+"-"+file.originalname);
   },
   
}); 

const maxSize = 20 * 1024;
const upload = multer({
   storage:storage,
   fileFilter: (req,file,cb)=>{
      if(file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg"){
         cb(null,true);
      }else{
         cb(null,false);
         return cb(new Error("Only .png, .jpg, .jpeg format allowed!"));
      }
   },
   limits: {
      fileSize: maxSize
   }
});

module.exports = upload;