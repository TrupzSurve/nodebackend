const bcrypt = require("bcryptjs")
const admin =[
    {
        
        Email:"admin@gmail.com",
        Password:bcrypt.hashSync("admin@123",10),
    
    }
  
]
module.exports =admin