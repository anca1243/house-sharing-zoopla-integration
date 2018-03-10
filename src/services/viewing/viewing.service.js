// Initializes the `viewing` service on path `/viewing`
const createService = require('./viewing.class.js');
const hooks = require('./viewing.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    name: 'viewing',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/viewing', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('viewing');

  service.hooks(hooks);
};
