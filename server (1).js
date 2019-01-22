const express = require('express')
const contacts = require('./Api/Contacts/Contacts1')
const Employee=require('./Api/Model/HR/Employee').Employee
const app = express()

const PORT = process.env.PORT || 3000

app.use('/Contacts', contacts)
app.listen(PORT, () => {
  console.log('Bappi Sarkar')
})

app.get('/', (req, res) => {
  res.send('<h1>Bappi Sarkar</h1>')
})
app.get('/contra', (req, res) => {
  res.send('<h1>Rahul Sarkar</h1>')
})


//
const Sequelize = require('sequelize');
var SequelizeAuto = require('sequelize-auto')
const sequelize = new Sequelize('erp_hr', 'sqlrw', 'RWsql@123', {
  host: 'devesql',
  dialect: 'mssql',
  operatorsAliases: true,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }, 
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

let tblEmployee = []
//sequelize.query("SELECT top(1) strEmployeeName FROM  tblemployee where intunitid=16").then(tblemployeeRow => {
 // console.log(tblemployeeRow)
 // tblEmployee.push(tblemployeeRow)
 // console.log(tblEmployee)
//})


app.get('/personal', (req, res) => {
  res.json(req)
})
 


  const tblUnit = sequelize.define("tblEmployee", {
    intEmployeeId: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
  },
  },
  {
    timestamps: false,
    paranoid: true,
    underscored: true,
   
    tableName: 'tblEmployee',
    
  })
   

  //const tblMobileInfo = sequelize.define("tblMobileInfo", {})

//SystemUsers.findAll().then(SystemUsers => {
 // console.log(SystemUsers)
//})

tblUnit.findAll().then(tblUnit => {  

  //tblEmployee.push(tblUnit)
 //console.log(tblUnit)
})
 
Employee.findAll().then(Employee => {  

  //tblEmployee.push(tblUnit)
 console.log(Employee)
})
 
