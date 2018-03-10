/* eslint-disable no-unused-vars */
const request = require('request-promise');


class Service {
  constructor (options) {
    this.options = options || {};
  }

  async find (params) {
    console.log(params)
    var sessionParams = {api_key: '2mga32kehjcckky5rhe36hnt'};
    var sessionUrl = 'https://api.zoopla.co.uk/api/v1/get_session_id.json'
    var viewingUrl = 'https://api.zoopla.co.uk/api/v1/arrange_viewing.json'
    return request({url:sessionUrl, qs:sessionParams})
      .then(response=>{
        var viewingParams = params.query;
        viewingParams.session_id = response.session_id;
        viewingParams.api_key = sessionParams.api_key;
        return request({url:viewingUrl, qs: viewingParams})
        .then(response=>{
          console.log("Get response: " + response);
          return JSON.parse(response);
        })
      });
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
