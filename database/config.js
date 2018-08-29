const path = require('path');

var knex = require('knex')({
    client:'mysql',
    connection: process.env.DATABASE_URL || {
        host: process.env.HOST,
        user: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
    },
    userNullAsDefault: true,
});

var db = require('bookshelf')(knex);

db.plugin('registry');

db.knex.schema.hasTable('friends_list').then(function(exists) {
    if (!exists) {
        db.knex.schema.createTable('friends_list', function(friend) {
            friend.integer('user_id');
            friend.string('name')
        }).then(function(table) {
            console.log(`${table} created`)
        })
    }
});

db.knex.schema.hasTable('user').then(function(exists) {
    if (!exists) {
        db.knex.schema.createTable('user', function(user) {
            user.increments('user_id').primary();
            user.string('email', 30).unique();
            user.string('password', 250);
            user.string('first_name', 20);
            user.string('last_name', 20);
            user.bool('E-personnel');
        }).then(function(table) {
            console.log(`${table} created`);
        })
    }
});

db.knex.schema.hasTable('watch_list').then(function (exists) {
  if (!exists) {
    db.knex.schema.createTable('watch_list', function (list) {
      list.integer('user_id')
      list.integer('event_id')
    }).then(function (table) {
      console.log(`${table} created`)
    })
  }
})

db.knex.schema.hasTable('contact_list').then(function(exists) {
    if (!exists) {
        db.knex.schema.createTable('contact_list', function(contact) {
            contact.integer('user_id')
            contact.integer('contact_id')
        }).then(function(table) {
            console.log(`${table} created`)
        })
    }
});

db.knex.schema.hasTable('contact').then(function(exists) {
    if (!exists) {
        db.knex.schema.createTable('contact', function(contact) {
            contact.increments('contact_id').primary();
            contact.string('name', 20);
            contact.integer('phone_number');
            contact.string('address', 100);
        }).then(function(table) {
            console.log(`${table} created`);
        })
    }
});

db.knex.schema.hasTable('location').then(function(exists) {
    if (!exists) {
        db.knex.schema.createTable('location', function(location) {
            location.increments('location_id').primary();
            location.integer("user_id").unsigned().notNullable().references("user_id").inTable("user");
            location.string('loc_name', 100);
            location.decimal('lat', 10, 8);
            location.decimal('long', 11, 8);
            location.string('primary', 100);
        }).then(function(table) {
            console.log(`${table} created`);
        })
    }
});

db.knex.schema.hasTable('event').then(function (exists) {
  if (!exists) {
    db.knex.schema.createTable('event', function (event) {
      event.increments('id').primary()
      event.string('severity', 40);
      event.integer('multi_polygon_id', 20).unsigned().notNullable().references("id").inTable("multi_polygon");
      event.date('expires');
      event.string('event_type', 100);
      event.string('status', 30);
      event.string('description', 100);
      event.string('instructions', 100);
      event.string('headline', 60);
    }).then(function (table) {
      console.log(`${table} created`);
    })
  }
})


db.knex.schema.hasTable('location_event').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('location_event', function(location_event) {
        location_event.increments('id').primary();
        location_event.integer('location_id').unsigned().notNullable().references("location_id").inTable("location");
        location_event.integer('event_id').unsigned().notNullable().references("id").inTable("event");
        location_event.bool('was_user_notified');
    }).then(function(table) {
        console.log(`${table} created`);
    })
  }
});


db.knex.schema.hasTable('coordinates').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('coordinates', function(coordinates) {
      coordinates.increments('id').primary();
      coordinates.integer("polygon_id").unsigned().notNullable().references("id").inTable("polygon");
      coordinates.decimal('latitude', 10, 8);
      coordinates.decimal('longitude', 11, 8);
      // coordinates.increments('sequence');
    }).then(function(table) {
        console.log(`${table} created`);
    })
  }
});

db.knex.schema.hasTable('polygon').then(function(exists){
  if (!exists) {
    db.knex.schema.createTable('polygon', function(polygon) {
      polygon.increments('id').primary();
      polygon.decimal('max_latitude', 10, 8);
      polygon.decimal('max_longitude', 11, 8);
      polygon.decimal('min_latitude', 10, 8);
      polygon.decimal('min_longitude', 11, 8);
      polygon.integer("multi_polygon_id").unsigned().notNullable().references("id").inTable("multi_polygon");
    }).then(function(table) {
        console.log(`${table} created`);
    })
  }
});

db.knex.schema.hasTable('multi_polygon').then(function(exists){
  if (!exists) {
    db.knex.schema.createTable('multi_polygon', function(multi_polygon) {
      multi_polygon.increments('id').primary();
      multi_polygon.decimal('max_latitude', 10, 8);
      multi_polygon.decimal('max_longitude', 11, 8);
      multi_polygon.decimal('min_latitude', 10, 8);
      multi_polygon.decimal('min_longitude', 11, 8);
    }).then(function(table) {
        console.log(`${table} created`);
    })
  }
});



db.knex.schema.hasTable('category').then(function(exists) {
    if (!exists) {
        db.knex.schema.createTable('category', function(category) {
            category.increments('event_id').primary();
            category.string('event_name').unique();
        }).then(function(table) {
            console.log(`${table} created`);
        })
    }
});

module.exports = db;
