/*jshint esversion: 6 */

import { fortuneCookies } from './Data';

const DataHandler = {

    getFortune(){
        return fortuneCookies[Math.floor(Math.random() * fortuneCookies.length)];
    }
};

export{ DataHandler };