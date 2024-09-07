/**
 * Validate email address
 * @param {string} email - The email address to validate 
 * @returns {boolean} - Return true if the email is valid, otherwise false; 
 */

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

module.exports = validateEmail;