/*jshint esversion: 6 */

const fortune = require('../lib/fortune.js');
const expect = require('chai').expect;

suite('Fortune cookie tests', () => {
    test('getFortune() should return a fortune', () => {
        expect(typeof(fortune.getFortune() === 'string'));
    });
});


// import { DataHandler } from './lib/DataHandler';

// suite('Fortune cookie tests', () => {
//     test('getFortune() should return a fortune', () => {
//         assert(typeof(DataHandler.getFortune()) === 'string');
//     });
// });