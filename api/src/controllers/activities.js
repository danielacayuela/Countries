const {Activity,Country} = require('../db');
const bodyParser = require('body-parser');

async function createActivity (req,res,next) {
    let {name,difficulty,time,season,countries} = req.body;
    try {
        let newActivity = await Activity.create({
            name,
            difficulty,
            time,
            season
        });
        countries.forEach(async country => {
            await newActivity.addCountry(country); // relaciono paises y actividades , queda en mi tabla intermedia
        });
        return res.send('Activy successfully created')
    }catch (error){
        next({status:404, message:'Something went wrong'})
    }
}

module.exports = {
    createActivity 
}