const {Router} = require('express');
const User = require('../models/user')

const router = Router();

router.get('/', (req, res) => {
    res.render('home');
})

router.post('/', (req, res) => {
    const user = new User({
        name: req.body.name,
        phone: req.body.phone,
    });
    user.save();

    res.redirect('/')
})

module.exports = router;
