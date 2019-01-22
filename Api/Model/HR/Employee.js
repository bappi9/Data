const express=require('express')
const Sequelize = require('sequelize');
 const dbs=require('../Configure').dbs

 const db = new Sequelize('erp_hr', 'sqlrw', 'RWsql@123', {
    host: 'devesql',
    dialect: 'mssql',
    operatorsAliases: true,
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });


  const LeaveTypeSetup= db.define('tblLeaveTypeSetup',{
    strLeaveType: Sequelize.STRING,
    strApplicableFor: Sequelize.STRING,
    intLeaveTypeID: {        
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    } 
  },
{
 tableName: 'tblLeaveTypeSetup' ,
    timestamps: false,
    paranoid: true,
    underscored: true
})

 
module.exports={
 LeaveTypeSetup
}
   