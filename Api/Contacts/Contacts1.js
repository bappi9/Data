const express= require('express')
const router=express.Router()


router.get('/',(req,res,next)=>{
    res.send('<h1>Alamin Contacts</h1>')
})

router.get('/:id',(req,res,next)=>{
const id=req.params.id
 res.status(200).json(
     {
     }
 )
})

module.exports= router