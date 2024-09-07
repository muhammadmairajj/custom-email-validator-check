//test/test.js

const assert = require("assert");
const validateEmail = require("../index");

assert.strictEqual(validateEmail('test@example.com'), true, 'Valid email should be return true');
assert.strictEqual(validateEmail('Invalid-email'), false, 'Invalid email should be return false');

console.log("All tests passed...");