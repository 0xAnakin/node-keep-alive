const sendkeys = require('sendkeys')

const key = ' ';
const base_interval = 1000 * 60 * 5; // minutes
const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const loop = () => {

    sendkeys(key).catch((e) => console.error(e)).finally(()=> {

        const next = (base_interval + getRandomIntInclusive(0, 60) * 1000);

        console.log(`sending char code ${key.charCodeAt(0)} in ${(next/1000)} seconds`);

        setTimeout(loop, next);

    });
    
}

const next = (base_interval + getRandomIntInclusive(0, 60) * 1000);

console.log(`sending char code ${key.charCodeAt(0)} in ${(next/1000)} seconds`);

setTimeout(loop, next);   