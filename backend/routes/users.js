const router = require('express').Router();

let User = require('../models/user.model');

//Display Users
router.get('/', (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            res.status(400).json(`Error - ${err}`);
        } else {
            res.json(users);
        }
    })
});

//Add new User
router.post('/add', (req, res) => {
    let newUser = new User();
    newUser.username = req.body.username;
    newUser.save((err) => {
        if (err) {
            res.status(400).json(`Error - ${err}`);
        } else {
            res.json('New user added!');
        }
    });
});

module.exports = router;