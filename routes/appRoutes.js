const express = require('express');
const router = express.Router();
const Blog = require('../models/dataSchema');



/** create new */
router.post('/create', (req, res, next) => {
    const newBlog = new Blog({
        title: req.body.title,
        description: req.body.description,
        dueDate: req.body.dueDate
    });
    newBlog.save((err,list) => {
        if (err) {
            res.status(500).json({errorMessage: err});
        } else {
            res.status(200).json({list});
        }
    })
});

/** read all list */
router.get('/read', (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
});


/** upate list */
router.put('/update', (req, res, next) => {
    Blog.findById(req.body._id, (err, list) => {
        if (err) {
            res.status(500).json({errorMessage: err});
        } else {
            list.title = req.body.title;
            list.description = req.body.description;
            list.dueDate =req.body.dueDate;
            list.save((err, list) => {
                if (err) {
                    res.status(500).json({errorMessage: err});
                } else {
                    res.status(200).json({list});
                }
            });
        }
    });
});


/** delete selected list */
router.delete('/delete/:id', (req, res, next) => {
    Blog.findOneAndRemove({ _id: req.params.id }, (err, list) => {
        if(err) {
            res.status(500).json({errmsg: err});
        } else {
            res.status(200).json({ msg: list});
        }
    });
});

module.exports = router;