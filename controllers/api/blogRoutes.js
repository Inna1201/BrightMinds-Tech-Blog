// const router = require('express').Router();
// const { Blog, Comment, User } = require('../../models/');
// const withAuth = require('../../utils/auth');

// router.get("/", async (req, res) => {
//     try {
//       const allBlogs = await User.findAll({
//         //////////////////////////

//         })
//       res.json(allBlogs);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

//   router.get("/:id", async (req, res) => {
//     try {
//       const oneBlog = await Category.findByPk(req.params.id, {
//         ////////////////////////////////

//       });
//       res.json(oneBlog);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });



//   router.post('/', withAuth, async (req, res) => {
//     try {
//       const newBlog = await User.create(req.body);
  
//       res.json(newBlog);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });