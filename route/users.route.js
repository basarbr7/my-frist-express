const router = require('express').Router()

router.get("/", (req, res)=>{
    res.send('Hello i am your user route ')
})


module.exports = router

