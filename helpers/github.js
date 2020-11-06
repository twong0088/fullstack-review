const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (handle, callback) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    // method: 'get',
    url: `https://api.github.com/users/${handle}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  axios.get(options.url, options.headers)
  .then((response) => {
    callback(null, response)
  })
  .catch((err) => {
    callback(err)
  });

}

module.exports.getReposByUsername = getReposByUsername;