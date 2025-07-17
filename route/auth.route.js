const router = require('express').Router()

router.get("/login", (req, res)=>{
    res.send('Hello i am your get route at login ')
})
router.get("/register", (req, res)=>{
    res.send('Hello i am your get route at register ')
})

module.exports = router 