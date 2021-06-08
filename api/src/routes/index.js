const router = require('express').Router();
const axios = require('axios').default;
const {BASE_URL} = require ('../constants/constants');
const {Country} = require('../db');

// Importar todos los routers;

const countryRoutes = require ('./country');
const activityRoutes = require ('./activity');

//traigo los datos de la api a mi db
async function infoToDb () {
    let empty = Country.count();
    if (empty) {
        let countries = await axios.get (BASE_URL, {responseType: 'json'})
        countries.data.forEach(async country => {
            await Country.create({
                    id: country.alpha3Code || 'NPI',
                    name: country.name || 'NPI',
                    flag: country.flag || 'NPI',
                    region: country.region || 'NPI',
                    capital: country.capital || 'NPI',
                    subregion: country.subregion || 'NPI',
                    area: Math.round(country.area),
                    population: Math.round(country.population)
            },{ ignoreDuplicates: true } ) //evito que me duplique los valores al momento de cargarse asi este en false en el servidor
        });
    } else { 
        next({status:404, message:'Something went wrong'});
    }
}
  
infoToDb();

//middleware para entrar a mis rutas

router.use('/countries', countryRoutes);
router.use('/activity', activityRoutes);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
