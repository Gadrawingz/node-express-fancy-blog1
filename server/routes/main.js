const express = require('express')
const router = express.Router();

// Routes
// when it was from app.js it was app.get(...)
router.get('', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

// Export this router to make it works
module.exports = router;