const db = require('./config.js');
const Users = require('./collections/users.js');
const User = require('./models/users.js');
const Categories = require('./collections/category.js');
const Category = require('./models/category.js');
const Events = require('./collections/event.js');
const Event = require('./models/event.js');
const Contacts = require('./collections/contacts.js');
const Contact = require('./models/contacts.js');
const Locations = require('./collections/locations.js');
const Location = require('./models/locations.js');

//export saves user to database input fields are (username, password)
exports.saveUser = user =>
  new Promise(function (resolve, reject) {
    new User({ 
    username: user.username,
    password: user.password,
    first_name: user.first_name,
    last_name: user.last_name,
    E_personnel: user.E_personnel }).fetch().then(save => (save ? reject() : Users.create(user).then(resolve)));
  });
  

//Get all information of the user that is currently logged in without a password for security purposes.
exports.getUser = (username) => {
    new Promise(resolve => new User({ username: username }).fetch().then(found => resolve(delete found.attributes.password && found.attributes)))
}

//export saves event to database input fields are (event_name: event_name)
exports.saveEvent = event =>
    new Promise(function (resolve, reject) {
        new Event({
        event_name: event.event_name,
        severity: event.severiry,
        status: event.status,
        expires: event.expires,
        urgency: event.urgency,
        description: event.description,
        affected_zones: event.affected_zones,
        instructions: event.instructions,
        headline: event.headline,
        current_coordinates: event.current_coordinates }).fetch().then(save => (save ? reject() : Events.create(event).then(resolve)));
    });

//export saves category to database input fields are (event_name: event_name),
//this table holds the different categories of events, it does not hold the event information just the event itself
exports.saveCategory = category =>
    new Promise(function (resolve, reject) {
        new Category({event_name: event.event_name }).fetch().then(save => (save ? reject() : Categories.create(category).then(resolve)));
    });

//export saves contact to database
exports.saveContact = contact =>
    new Promise(function (resolve, reject) {
        new Contact({
        contact: contact.contact_name,
        phone_number: contact.phone_number,
        address: contact.address }).fetch().then(save => (save ? reject() : Contacts.create(contacts).then(resolve)));
    });

//export saves coordinates to database (e.g - [[[12312.098109238210, 12932.100981239012]]])
exports.saveLocation = location =>
    new Promise(function (resolve, reject) {
        new Location({contact: contact.location_coordinates }).fetch().then(save => (save ? reject() : Locations.create(location).then(resolve)));
    });

    