// Initializes the `listings` service on path `/listings`
const createService = require('./listings.class.js');
const hooks = require('./listings.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    name: 'listings',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/listings', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('listings');

  service.hooks(hooks);
};
