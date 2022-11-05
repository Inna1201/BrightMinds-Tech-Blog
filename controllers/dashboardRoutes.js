const router = require("express").Router();

const { Blog } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const userBlog = await Blog.findAll({
      where: {
        userId: req.session.user_id, /// req.session.user_id
      },
    });

    // console.log('inside userBlog', userBlog);

    const blogs = userBlog.map((blog) => blog.get({ plain: true }));

    console.log("inside dashboard", blogs);

    res.render("dashboard", { blogs: blogs, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/newPost", withAuth, async (req, res) => {
  try {
    res.render("newPost");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const editBlog = await Blog.findByPk(req.params.id);

    
    if (editBlog) {
      const blog = editBlog.get({ plain: true });
      console.log(blog)

      res.render('edit', { blog: blog, logged_in: req.session.logged_in });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('dshboard');
  }
});



module.exports = router;
