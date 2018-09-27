/*jshint esversion: 6 */

const fortuneCookies = [
    "Conquer your fears or they will conqur you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple."
];

exports.getFortune = () => fortuneCookies[Math.floor(Math.random() * fortuneCookies.length)];