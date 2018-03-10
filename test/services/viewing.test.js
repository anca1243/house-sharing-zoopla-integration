const assert = require('assert');
const app = require('../../src/app');

describe('\'viewing\' service', () => {
  it('registered the service', () => {
    const service = app.service('viewing');

    assert.ok(service, 'Registered the service');
  });
});
