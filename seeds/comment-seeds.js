const { Comment } = require('../models');

const commentData = [
    {
        
        body: "Cool",
        userId: 1,
        blogId: 3,
    },

    {
        
        body: "Great",
        userId: 2,
        blogId: 1,
    },

    {
        
        body: "Agree",
        userId: 3,
        blogId: 2,
    },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;