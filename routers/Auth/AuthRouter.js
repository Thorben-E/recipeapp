const express = require('express');
const Authcontroller = require('../../controllers/AuthController/Authcontroller');
const passport = require('../../passportConfig')

const router = express.Router();

//Authentication
router.post('/api/signup', Authcontroller.signup);

router.post('/api/login', passport.authenticate('local'), Authcontroller.login);

router.get('/api/current_user', Authcontroller.current_user)

//Authorization


module.exports = router