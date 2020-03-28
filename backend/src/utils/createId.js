const crypto = require('crypto');

function createId() {
    return crypto.randomBytes(4).toString('HEX');
}

module.exports = createId;