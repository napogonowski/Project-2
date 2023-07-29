const express = require('express');
const router = express.Router();
const passport = require('passport'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Butter' });
});

// OAUTH ROUTE (GET -> auth/google)
router.get('auth/google', passport.authenticate(
  'google',
  {
    scope:[ 'profile', 'email'],
    prompt: 'secelt_account'
  }
));
//URI CB 
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/dashboard',
    failureRedirect: '/index'
  }
));

// log out 
router.get('/logout', function (req, res) {
  req.logout(function () {
    res.redirect('/index')
  });
});
module.exports = router;
