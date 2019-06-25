require('dotenv').config();
const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();
// Tests can also be written with 'expect' rather than 'should' if desired
// const expect = chai.expect;

chai.use(chaiHttp);

describe('Austin Data API', () => {
  it('it should receive json data from API', () => {
    const { getAACFoundData } = require('./../scripts/austinAPI.js');
    const testParams = {
        '$$app_token': process.env.APP_TOKEN,
        '$limit': 5000,
        type: 'Dog',
        looks_like: 'Labrador Retriever/Dalmatian',
        color: 'White/Black',
        sex: 'Neutered Male',
      };
    getAACFoundData(testParams, (err, results) => {
      const resResults = results.data
      // console.log(results.data);
      should.not.exist(err);
      should.exist(resResults);
      resResults.should.be.an('array');
    })
  });
});
