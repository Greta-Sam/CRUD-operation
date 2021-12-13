const express = require('express');
const router = express.Router();
const Audiences = require('../models/audiences.model')


//request get all audiences
router.get('/', (req, res) => {
    Audiences.find()
    .then(audience => res.json(audience))
    .catch(err => res.status(400).json(`Error: ${err}`))
})


//request add new audience
router.post('/add', (req, res) => {
    const newAudience = new Audiences({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        phone: req.body.phone,
    })

    newAudience
    .save()
        .then(() => res.json('The new Audience added successfuly!'))
        .catch(err => res.status(400).json(`Error: ${err}`))
});


//request find audince by ID 
router.get('/:id', (req, res) => {
    Audiences.findById(req.params.id)
        .then(audience => res.json(audience))
        .catch(err => res.status(400).json(`Error: ${err}`))
});


//request find audince by ID and update
router.put('/update/:id', (req, res) => {
    Audiences.findById(req.params.id)
        .then(audience => {
            audience.name = req.body.name;
            audience.surname = req.body.surname;
            audience.email = req.body.email;
            audience.phone = req.body.phone;

            audience
                .save()
                .then(() => res.json('The Audience is updated successfuly!'))
                .catch(err => res.status(400).json(`Error: ${err}`))
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
})
//request find audince by ID and delete
router.delete('/:id', (req, res) => {
    Audiences.findByIdAndDelete(req.params.id)
        .then(() => res.json('The audience is deleted successfuly!'))
        .catch(err => res.status(400).json(`Error: ${err}`))
});



module.exports = router;
