var habitat = require('habitat');

// Local environment in .env overwrites everything else
habitat.load('.env');

var environment = habitat.get('NODE_ENV');

if (environment === 'PRODUCTION') {
  habitat.load('config/production.env');
}

habitat.load('config/defaults.env');

var config = {
  API_URI: habitat.get('API_URI'),
};

process.stdout.write(
  '// THIS IS A GENERATED FILE. EDIT npm_tasks/build-config.js INSTEAD\n' +
  'module.exports = ' + JSON.stringify(config) + ';\n'
);
