const router = require('express').Router();

let Activity = require('../models/activity.model');

//Get Activities
router.get('/', (req, res) => {
    Activity.find({}, (err, activities) => {
        if (err) {
            res.status(400).json(`Error - ${err}`);
        } else {
            res.json(activities);
        }
    });
});

//Get Activity
router.get('/:id', (req, res) => {
    Activity.findById(req.params.id, (err, activity) => {
        if (err) {
            res.status(400).json(`Error - ${err}`);
        } else {
            res.json(activity);
        }
    })
});

//Add new Activity
router.post('/add', (req, res) => {
    let newAct = new Activity();
    newAct.title = req.body.title;
    newAct.description = req.body.description;
    newAct.urgency = req.body.urgency;
    newAct.username = req.body.username;
    newAct.duration = Number(req.body.duration);
    newAct.date = Date.parse(req.body.date);
    newAct.save((err) => {
        if (err) {
            res.status(400).json(`Error - ${err}`);
        } else {
            res.json('New activity added!');
        }
    });
});

//Update Activity
router.post('/edit/:id', (req, res) => {
    let activity = {
        title: req.body.title,
        description: req.body.description,
        urgency: req.body.urgency,
        username: req.body.username,
        duration: Number(req.body.duration),
        date: Date.parse(req.body.date)
    };
    let query = {'_id': req.params.id};
    Activity.updateOne(query, activity, (err) => {
        if (err) {
            res.status(400).json(`Error - ${err}`);
        } else {
            res.json('Activity updated!');
        }
    });
});

//Delete Activity
router.delete('/:id', (req, res) => {
    Activity.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            res.status(400).json(`Error - ${err}`);
        } else {
            res.json('Activity deleted!');
        }
    });
});

module.exports = router;