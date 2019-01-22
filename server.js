const express = require('express')
const contacts = require('./Api/Contacts/Contacts1')

const emproute= require('./Api/routes/HrRoutes')
const bodyParser = require('body-parser')
const app = express()

const PORT = process.env.PORT || 3000
app.use(bodyParser.json())

app.use('/Contacts', contacts)
app.use('/api', emproute)

app.listen(PORT, () => {
  console.log('Bappi Sarkar')
})

app.get('/', (req, res) => {
  res.send('<h1>Bappi Sarkar</h1>')
})
app.get('/contra', (req, res) => {
  res.send('<h1>Rahul Sarkar</h1>')
}) 

app.get('/personal', (req, res) => {
  res.json(req)
})
 


  
   

  
 
