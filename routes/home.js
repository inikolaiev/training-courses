const {Router} = require('express');
const User = require('../models/user')
const router = Router();
const nodeMailer = require('nodemailer');
const nodeMailerSendGrid = require('nodemailer-sendgrid-transport');

const mailAPIKey = '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';

const transporter = nodeMailer.createTransport(nodeMailerSendGrid({
    auth: {
        api_key: mailAPIKey,
    }
}))
router.get('/', (req, res) => {
    res.render('home');
})

router.post('/', (req, res) => {
    const user = new User({
        name: req.body.name,
        phone: req.body.phone,
    });
    user.save();

    transporter.sendMail({
        to: 'inikolaiev@access.dev',
        from: 'inikolaiev@access.dev',
        subject: 'registration',
        html: '<h2>Hello</h2>' +
            '<p>Thank you for subscription</p>'
    })

    res.redirect('/')
})

module.exports = router;
