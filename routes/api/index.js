const express   = require("express");
const router    = express.Router();

const controllers = require('../../controllers');

router.get('/test', (req, res) => res.json({ test: 'hello Users!' }));

router.get('/state=', controllers.states);
// router.get('/:stateID/:municipalityID', controllers.municipalities);
// router.get('/:stateID/:municipalityID/:parishID', controllers.parishes);

module.exports = router;
