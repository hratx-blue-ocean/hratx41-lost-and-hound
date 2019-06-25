require('dotenv').config();
const chai = require('chai');
const chaiHttp = require('chai-http');
const axios = require('axios');
const should = chai.should();
// Tests can also be written with 'expect' rather than 'should' if desired
const expect = chai.expect;

chai.use(chaiHttp);

  describe('Austin Data API', () => {
    it('it should receive json data from API', () => {
      const { getAACFoundData } = require('./../scripts/austinAPI.js');
      const testParams = {
          looks_like: 'Labrador Retriever/Dalmatian',
          color: 'White/Black',
          sex: 'Neutered Male',
        };
      getAACFoundData(testParams, (err, results) => {
        const resResults = results
        // console.log(results.data);
        should.not.exist(err);
        should.exist(resResults);
        resResults.should.be.an('array');
        resResults[0].should.be.an('object');
      })
    });
  });
  

  describe('Found Dogs Route', () => {
    it('it should receive a response', (done) => {
      chai.request('http://localhost:8000')
        .get('/api/found')
        .query({
          looks_like: 'Labrador Retriever/Dalmatian',
          color: 'White/Black',
          sex: 'Neutered Male',
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          expect(res.body[0]).to.be.an('object');
          done();
        })
      });
  })