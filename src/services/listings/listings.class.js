/* eslint-disable no-unused-vars */
const request = require('request-promise');

class Service {
  constructor (options) {
    this.options = options || {};
  }

  async find (params) {
    var propertiesObject = params.query;
    propertiesObject.api_key ="2mga32kehjcckky5rhe36hnt";
    propertiesObject.listing_status ="rent";

    var url = 'http://api.zoopla.co.uk/api/v1/property_listings.json'
    return request({url:url, qs:propertiesObject})
      .then((response)=>{
        response = JSON.parse(response)
        let listings = response.listing.slice(0,3);
        return listings;
      })
      .catch(err=>{
        return err;
      })

}

  async get (id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

  async create (data, params) {
    if (Array.isArray(data)) {
      return await Promise.all(data.map(current => this.create(current)));
    }

    return data;
  }

  async update (id, data, params) {
    return data;
  }

  async patch (id, data, params) {
    return data;
  }

  async remove (id, params) {
    return { id };
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
