const router = require('express').Router();
const Club = require('../../models/club');

// router.get('/clubs', function(req, res) {
//     res.json({ message: 'GET /clubs' });
// });

router.get('/clubs/:id', (req, res) => {
    res.json({ message: `GET /clubs/${req.params.id}` });
});

// router.post('/clubs/', (req, res) => {
//     res.json({ message: 'POST /club', data: req.body });
// });

router.delete('/clubs/:id', (req, res) => {
    res.json({ message: `DELETE /clubs/${req.params.id}` });
});

router.post('/clubs/', (req, res) => {
    let playload = req.body;
    let newClub = new Club({
        name: playload.name,
        country: playload.country
    });
    newClub
        .save()
        .then(data => {
            res.json({
                data: data
            });
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
});

router.get('/clubs', (req, res) => {
    Club
        .find()
        .populate({ path: 'club', select: 'name' })
        .then(data => {
            res.json({ data: data });
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
});

module.exports = router;