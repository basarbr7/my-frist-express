const express = require('express')
const app= express()

// Routers
const userRouter = require('./route/users.route')
const authRouter = require('./route/auth.route')

app.use('/user', userRouter)
app.use('/auth', authRouter)


// 404 error
app.use((req, res)=>{
    res.send('404 error ! page not found')
})
module.exports = app