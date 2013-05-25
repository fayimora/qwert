// require('../mocha/expect.js');
// var assert = require('assert');
'use strict';
(function () {
    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('should run here few assertions', function () {
              expect([]).to.be.an('array');
              // assert.equal(-1, [1,2,3].indexOf(5));
              // assert.equal(-1, [1,2,3].indexOf(0));
            });
            it('should not pss', function () {
              expect([]).to.be.an('int');
            });
            it('pending');
            it('pending');
        });
    });
})();
