const router = require("express").Router();
const { Blog } = require("../../models/");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  console.log("new post", req.body);
  try {
    const newBlog = await Blog.create({
      ...req.body,
      userId: req.session.user_id,
    });

    console.log("new post", newBlog);
    res.json(newBlog);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/edit/:id", withAuth, async (req, res) => {
  console.log("updated post", req.body);
  try {
    const updatedBlog = await Blog.update(
      { ...req.body, userId: req.session.user_id },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    console.log("updated post", updatedBlog);
    res.json(updatedBlog);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
