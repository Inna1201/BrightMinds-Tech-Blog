const { User } = require('../models');

const userData = [
    {
        username: "some_guy",
        password: "redcar4"

    },
    {
        username: "some_next",
        password: "bluecar7"

    },
    {
        username: "not_least",
        password: "greencar5"

    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
