var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function() {

  describe('share_location', function() {

    describe('POST /shareLocation', function() {

      it('should return a successful message', function(done) {

        request(server)
          .POST('/shareLocation')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql('location shared');

            done();
          });
      });

      it('should accept following parameters', function(done) {

        request(server)
          .POST('/shareLocation')
          .body({ location: {"lat":209380.98,"lng":-343243.343},timestamp:"2017-03-05"})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql('location shared');

            done();
          });
      });

    });

  });

});
