const express = require('express')
const router=express.Router()
const { getData ,postData }=require('../Controllers/EmpControl')

router.get('/data',getData)
router.post('/data',postData)

module.exports=router