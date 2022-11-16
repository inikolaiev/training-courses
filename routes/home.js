const {Router} = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.render('home');
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router;
