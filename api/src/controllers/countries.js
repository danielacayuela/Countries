const { Op } = require('sequelize');
const { Country, Activity } = require('../db');

// ruta: /countries/  Y  /countries?name=...
async function getFirstTenOrIncludes(req, res, next) {
  //si no tiene name me traigo los paises de la db incluyendo las actividades
  let name = req.query.name;
  if (!name) {
    try {
      let countries = await Country.findAll({include:[Activity]});
      return res.json(countries);
    } catch (e) {
      next({status:404, message:'Something went wrong'})
    }
  }else{
    //Si tiene name busco paises que contengan la palabra -> ilike no case sensitive
    try {
      let countryFounded = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          }
        },
        include: [Activity]
      });
      return res.json(countryFounded);
    } catch (error) {
      next({status:404, message:'Something went wrong'})
    }
  }
}

//ruta: /countries/:idPais
async function getCountryDetail(req, res, next) {
  //confirmo si recibí id y busco el pais al que corresponde
  let request = req.params.idPais;
  let exists = await Country.findByPk(request);
  if (exists) {
    let country = await Country.findOne({
      where: { id: request },
      include: [Activity],
    })
    return res.json(country);
  }else{
    res.status(404).send('Something went wrong')
  }
}

module.exports = {
  getFirstTenOrIncludes,
  getCountryDetail,
};
