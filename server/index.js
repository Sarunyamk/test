// const http = require('http')

// const host = 'localhost'
// const port = 8000

// const requestListener = function (req, res) {
//     res.writeHead(200)
//     res.end("My first server!")
//   }

//   const server = http.createServer(requestListener)
// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`)
// })

const express = require('express')
const bodyparser = require('body-parser')
const app = express()
app.use(bodyparser.json())

const port = 8000
let users = []


// app.get('/test', (req, res) => {
//   let user = {
//     firstname: 'test',
//     lastname: 'test2',
//     age: 20
//   }
//   res.json(user)
// })
app.get('/users' , (req,res) =>{
  res.json(users) 
})


app.post('/AddUser', (req, res) => {
  let user = req.body
  users.push(user)
  res.json({
    message: 'add ok',
    user: user
  })
})


app.listen(port, (req, res) => {
  console.log('http server run at' + port)
})