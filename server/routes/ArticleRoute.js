const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', { title: "Articles List" })
    // res.send("Articles Page")
})


module.exports = router