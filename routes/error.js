const express = require('express')
const router = express.Router()

// @desc    Error
// @route   GET *
router.get('*', (req, res) => {
    res.render('error/404')
})

module.exports = router