const express = require('express')
const router = express.Router();

// Routes
// when it was from app.js it was app.get(...)
router.get('', (req, res) => {
    const locals = {
        title: "Home page - Fancy Blog",
        description: "Simple blog made using Node.js and Express"
    }
    res.render('index', { locals });
});

router.get('/about', (req, res) => {
    const locals = {
        title: "About Us - Fancy Blog",
        description: "This page describe about us page"
    }
    res.render('site-out/about', { locals });
});

router.get('/mission', (req, res) => {
    const locals = {
        title: "Our Mission - Fancy Blog",
        description: "This page we see the mission of fancy blog"
    }
    res.render('site-out/mission', { locals });
});

// Export this router to make it works
module.exports = router;