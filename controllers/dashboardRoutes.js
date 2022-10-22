const router = require("express").Router();

const { Blog } = require("../models");
// const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
      if (req.session.logged_in) {
        return res.redirect('/');
      }
      res.render('dashboard');
    } catch (err) {
      res.status(500).json(err);
    }
  });


  module.exports = router;