<<<<<<< HEAD
const db = require('../config.js');
=======
var db = require('../config.js');
>>>>>>> bd3c158651d1cbeafcb9aaa6502e9db08f9496ad

var Contact = db.Model.extend({
    tableName: 'contact',
    hasTimeStamps: true,
});

module.exports = db.model('Contact', Contact);