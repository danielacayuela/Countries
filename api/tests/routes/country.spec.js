/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  name: 'Argentina',
};

describe('Rutas', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  beforeEach(() => Country.sync({ force: false })
    .then(() => Country.findOne({
      where: {
        name: country.name
      }
    })));
 
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );

  //desde aquí empecé rutas countries
    it('should get 404 when searching YTM by id', () =>
      agent.get('/countries/YTM').expect(404)
    );
    it('should get 404 when searching ZTM by id', () =>
      agent.get('/countries/ZTM').expect(404)
    );
    it('should get 200 when searching arg by name', () =>
      agent.get('/countries?name=arg').expect(200)
    );
    it('should get 200 when searching colo by name', () =>
      agent.get('/countries?name=colo').expect(200)
    );
  });

});
  
