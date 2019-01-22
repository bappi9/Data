const express=require('express')
const Sequelize = require('sequelize');

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

  module.export={
      db
  }