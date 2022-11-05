const { Blog } = require('../models');

const blogData = [
    {
       
        title: "Best Apps For Production",
        content: "Smart thoughts",
        userId: 1

    },
    {
        
        title: "Tech trends 2023",
        content: "smarter thoughts",
        userId: 2

    },
    {
        
        title: "How to take good pictures with your camera.",
        content: "some thoughts",
        userId: 3

    },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;