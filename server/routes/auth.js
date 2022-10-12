const express = require('express');
const passport = require('passport');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();

const clientUrl =
  process.env.NODE_ENV === "production"
    ? process.env.CLIENT_URL_PROD
    : process.env.CLIENT_URL_DEV;
// @desc    Auth with Google
// @route   GET /auth/google
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// @desc    Google auth callback
// @route   GET /auth/google/callback
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: clientUrl, failureFlash: true }),
  (req, res) => {
    if (req.user.username == "") {
      res.redirect(clientUrl + '/register');
    }
    else {
      req.session.type = 'login';
      res.redirect(clientUrl);
    }
  }
);

// @desc    Logout user
// @route   /auth/logout
router.get('/logout', (req, res) => {
  req.logout();
  res.send('done');
});

module.exports = router;