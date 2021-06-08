const router = require('express').Router();
const {createActivity} = require('../controllers/activities')

router.post('/', createActivity);

module.exports = router;