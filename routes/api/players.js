const router = require('express').Router();
const Player = require('../../models/player');

router.get('/players', function(req, res) {
  res.json({message: 'GET /players'});
});

router.get('/players/:id', (req, res) => {
  res.json({message: `GET /players/${req.params.id}`});
});

router.post('/players/', (req, res) => {
  res.json({message: 'POST /players', data: req.body });
});

router.delete('/players/:id', (req, res) => {
  res.json({message: `DELETE /players/${req.params.id}`});
});

module.exports = router;