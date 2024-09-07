const validateEmail = require('custom-email-validator-check');


console.log("testing package -->", validateEmail('test@gmail.com'));
console.log("testing package -->", validateEmail('test@mailcom'));