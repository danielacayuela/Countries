const { Country, Activity, conn } = require('../../src/db.js');
const { expect } = require('chai');


//aquí empecé con Activity
describe('Activity model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));
    describe('given info', () => {
      it('should throw an error if information provided is null', (done) => {
        Activity.create({})
          .then(() => done(new Error('Something went wrong')))
          .catch(() => done());
      });
      it('should throw an error if information provided has no name', (done) => {
        Activity.create({difficulty:5,time:2,season:'summer',countries:'ESP'})
          .then(() => done(new Error('Something went wrong')))
          .catch(() => done());
      });
      it('should throw an error if information provided is not the correct type', (done) => {
        Activity.create({name:6, difficulty: 'hola', time:4, season: 'spring',countries:'COL'})
          .then(() => done(new Error('Something went wrong')))
          .catch(() => done());
      });
      it('should throw an error if season provided is not within the four options', (done) => {
        Activity.create({name: 'hiking', difficulty: 5, time:4, season: 'cold',countries:'COL'})
          .then(() => done(new Error('Something went wrong')))
          .catch(() => done());
      });
      it('should work when its a valid information', () => {
        Activity.create({ name: 'hiking', difficulty: 5, time:4, season: 'spring',countries:'COL' });
      });
      it('should work when its more than two countries', () => {
        Activity.create({ name: 'hiking', difficulty: 5, time:4, season: 'spring',countries:['COL','DEU']});
      });
    });
  });
});
