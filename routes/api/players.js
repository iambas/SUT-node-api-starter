const router = require('express').Router();
const Player = require('../../models/player');
const mongoose = require('mongoose');

// router.get('/players', function(req, res) {
//     res.json({ message: 'GET /players' });
//     Player.find()
//         .then(function(data) {
//             res.json({
//                 data: data
//             });
//             console.log('data', data);
//         });
// });

router.get('/players/:id', (req, res) => {
    res.json({ message: `GET /players/${req.params.id}` });
});

// router.post('/players/', (req, res) => {
//     res.json({ message: 'POST /players', data: req.body });
// });

router.delete('/players/:id', (req, res) => {
    res.json({ message: `DELETE /players/${req.params.id}` });
});

router.post('/players/', (req, res) => {
    let payload = req.body;
    let newPlayer = new Player({
        name: payload.name,
        position: payload.position,
        age: payload.age,
        club: mongoose.Types.ObjectId(payload.club)
    });
    newPlayer
        .save()
        .then(function(data) {
            res.json({
                data: data
            });
        })
        .catch(function(error) {
            res.status(500).json({ error: error.message });
        });
});

router.get('/players', function(req, res) {
    Player
        .find()
        .populate({ path: 'club', select: 'name' })
        .then(function(data) {
            res.json({
                data: data
            });
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
});

module.exports = router;