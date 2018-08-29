const request = require('request');

let options = (url = '', queryString) => {
  let options = {
    url: ''l,
    qs: queryString,
    headers: process.env.API_KEYS
  }
  return options;
}

