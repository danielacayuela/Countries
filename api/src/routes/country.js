const router = require('express').Router();
const {getFirstTenOrIncludes, getCountryDetail} = require('../controllers/countries')

router.get('/', getFirstTenOrIncludes);
router.get('/:idPais', getCountryDetail);


module.exports = router;