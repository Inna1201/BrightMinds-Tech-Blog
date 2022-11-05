const router = require("express").Router();

const { Comment } = require("../../models/");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  console.log("comment", req.body);
  try {
    const response = await Comment.create({ ...req.body, 
      userId: req.session.user_id });
    console.log('response', response);
   
    res.json(response);
  } catch (error) {
    res.status(400).json(err);
  }
});

module.exports = router;


