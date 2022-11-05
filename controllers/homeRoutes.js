const router = require("express").Router();

const { Blog, Comment, User } = require("../models");

router.get('/', async (req, res) => {
 try {
  const blogInfo = await Blog.findAll({ include: [User] })
  // console.log('bloginfo', blogInfo)
  const blogs = blogInfo.map((blog) => blog.get({ plain: true }));
  // console.log('iside blogs',blogs);
  res.render("homepage", {blogs: blogs, logged_in: req.session.logged_in} );
 } catch (error) {
  res.status(500).json(err);
 }
 });

router.get('/login', async (req, res) => {
  try {
    if (req.session.logged_in) {
      return res.redirect('/');
    }
    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', async (req, res) => {
  try {
    if (req.session.logged_in) {
      return res.redirect('/');
    }
    res.render('signup');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  try {
    const blogInfo = await Blog.findByPk(req.params.id, { include: [User,
      {
        model: Comment,
        include: [User],
      },
    ] });

    
    if (blogInfo) {
      const blog = blogInfo.get({ plain: true });
      console.log(blog)

      res.render('post', { blog: blog, logged_in: req.session.logged_in });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;





