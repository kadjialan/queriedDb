const express=require("express")
const fileUpload = require('express-fileupload')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
app.use(fileUpload())
app.post("/",(res,req)=>{
  const filename = req.files.rebase.filename
  const file = req.files.rebase
  let uploadPath = __dirname+"/uploads/"+filename
  file.mv(uploadPath,(err)=>{
    if(err){
      return res.send(Err)
    }
  })
  res.send(200)
});
app.listen('4000')