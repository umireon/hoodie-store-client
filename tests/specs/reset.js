var merge = require('lodash/merge')
var test = require('tape')

var Store = require('../../')
var options = process.browser ? {
  adapter: 'memory'
} : {
  db: require('memdown')
}

test('scoped store calls should work after reset (hoodiehq/hoodie#612)', function (t) {
  t.plan(1)

  var store = new Store('test-db-reset', merge({remote: 'test-db-reset'}, options))

  store.reset()

  .then(function () {
    return store('scope').findAll()
  })

  .then(function () {
    t.pass('ok')
  })

  .catch(t.error)
})
