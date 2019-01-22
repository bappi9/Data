const LeaveTypeSetup= require('../Model/HR/Employee').LeaveTypeSetup
const bodyParser = require('body-parser')
 

const getData= (req, res) => {
  console.log(req.body.lvtypeData)
    LeaveTypeSetup.findAll({
        where: req.body.lvtypeData
    }).then(lvtyps => {  
      
        res.status(200).send(lvtyps)
       
      }) 
}
 
const postData=(req,res)=>{
 console.log(req.body.lvtypeData)
 let Leav=new LeaveTypeSetup(req.body.lvtypeData)
 console.log(Leav)
 Leav.save().then(data=>{
   // res.status(200).send(req.body.lvtypeData)
   res.json({
       message: 'Submit Sucessfully',
       LeaveTypeSetup:data
   })   
})
.catch(err=>{
    res.json({
        message: 'error',
         error:err
         
    })
})
}


module.exports={
    getData,postData
}