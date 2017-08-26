const router = require('express').Router();
const Club = require('../../models/club');

router.get('/clubs', function(req, res) {
  res.json({message: 'GET /clubs'});
});

router.get('/clubs/:id', (req, res) => {
  res.json({message: `GET /clubs/${req.params.id}`});
});

router.post('/clubs/', (req, res) => {
  res.json({message: 'POST /club', data: req.body });
});

router.delete('/clubs/:id', (req, res) => {
  res.json({message: `DELETE /clubs/${req.params.id}`});
});

module.exports = router;