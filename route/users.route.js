const router = require('express').Router()

router.get("/", (req, res)=>{
    res.send('Hello i am your get route at home  ')
})


module.exports = router

