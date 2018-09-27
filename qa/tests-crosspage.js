/*jshint esversion: 6 */

const Browser = require('zombie');
const assert = require('chai').assert;

let browser;

suite('Cross-Page Tests', () => {
    setup(() => {
        browser = new Browser();
    });

    test('requesting a group rate qoute from the hood river tour page' + 'should populate the referrer field', (done) => {
        let referrer = 'http://localhost:3000/tours/hood-river';
        browser.visit(referrer, () => {
            browser.clickLink('.requestGroupRate', () => {
                if (browser.field('referrer').value !== referrer)
                    assert('referrer from hood river tour page required');
                done();
            });
        });
    });

    test('requseting a group rate from the oregon coast tour page' + 'should populate the referrer field', (done) => {
        let referrer = 'http://localhost:3000/tours/oregon-coast';
        browser.visit(referrer, () => {
            browser.clickLink('.requestGroupRate', () => {
                assert(browser.field('referrer').value === referrer);
                done();
            });
        });
    });

    test('visiting the "request group rate" page dirctly should result' + 'in an empty referrer field', (done) => {
        let referrer = 'http://localhost:3000/tours/request-group-rate';
        browser.visit(referrer, () => {
            assert(browser.field('referrer').value === "");
            done();
        });
    });
});