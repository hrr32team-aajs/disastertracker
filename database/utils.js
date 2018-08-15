const db = require('./config.js');
const Users = require('./collections/users.js');
const User = require('./models/users.js');
const Categories = require('./collections/category.js');
const Category = require('./models/category.js');
const Events = require('./collections/event.js');
const Event = require('./models/event.js');

//export saves user to database input fields are (username, password)
exports.saveUser = user => {
    new Promise({function (resolve, reject) {
        new User({ username: user.username }).fetch().then(save => (save ? reject() : Users.create(user).then(resolve)));
    }})
}

//Get all information of the user that is currently logged in without a password for security purposes.
exports.getUser = (username) => {
    new Promise(resolve => new User({ username: username }).fetch().then(found => resolve(delete found.attributes.password && found.attributes)))
}

//export saves event to database input fields are ()
exports.saveEvent = event => {
    Promise({function (resolve, reject) {
        new Event({event_name: event.event_name }).fetch().then(save => (save ? reject() : Events.create(event).then(resolve)));
    }})
}

//export saves category to database input fields are ()
exports.saveCategory = category => {
    Promise({function (resolve, reject) {
        new Category({event_name: event.event_name }).fetch().then(save => (save ? reject() : Categories.create(category).then(resolve)));
    }})
}