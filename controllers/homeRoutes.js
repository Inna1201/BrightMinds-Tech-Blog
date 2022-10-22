const router = require("express").Router();

const { Blog, Comment, User } = require("../models");

router.get('/', async (req, res) => {
 try {
  const blogInfo = await Blog.findAll({ include: [User] })
  // console.log('bloginfo', blogInfo)
  const blogs = blogInfo.map((blog) => blog.get({ plain: true }));
  console.log('iside blogs',blogs);
  res.render("homepage", {blogs} );
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
    const blogInfo = await Blog.findByPk(req.params.id, { include: [User] })
    
    if (blogInfo) {
      const blog = blogInfo.get({ plain: true });

      res.render('post', { blog });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;




//     .then((blogData) => {
//       const blogs = blogData.map((blog) => blog.get({ plain: true }));
//       console.log('iside blogs',blogs)
//       // render the 'homepage' Handlebars template
//       res.render("homepage", blogs);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.get('/login', async (req, res) => {
//   try {
//     if (req.session.logged_in) {
//       return res.redirect('/dashboard');              // connect routes to the correct Handlebars.js templates
//     }
//     res.render('login');
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/signup', (req, res) => {
//     res.render('signup');
// });

// router.get('/blog/:id', async (req, res) => {
//     try {
//       const blogData = await blog.findByPk(req.params.id, {
//         include: [
//             User,
//           {
//             model: Comment,
//             include: [User],
//           },
//         ],
//       });
  
//       const blogs = blogData.get({ plain: true });
  
//       res.render('blog', {
//         ...blog,
//         logged_in: req.session.logged_in
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });


