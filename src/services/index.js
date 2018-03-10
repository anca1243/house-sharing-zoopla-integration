const listings = require('./listings/listings.service.js');
const viewing = require('./viewing/viewing.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(listings);
  app.configure(viewing);
};
