const { Blog } = require('../models');

const blogData = [
    {
       
        title: "Blog1",
        content: "smart thoughts",
        userId: 1

    },
    {
        
        title: "Blog2",
        content: "smarter thoughts",
        userId: 2

    },
    {
        
        title: "Blog3",
        content: "the smartest thoughts",
        userId: 3

    },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;