var Backbone = require('backbone')

var TestResults = Backbone.Model.extend({
  initialize: function(){
    this.reset()
  }
  , reset: function(){
    this.set({
      topLevelError: null
      , failed: 0
      , passed: 0
      , total: 0
      , tests: new Backbone.Collection
      , all: false
    })
  }
  , addResult: function(result){
    var total = this.get('total')
      , passed = this.get('passed')
      , failed = this.get('failed')
    total++
    if (result.failed == 0)
      passed++
    else
      failed++
    this.set({
      total: total
      , passed: passed
      , failed: failed
      , items: result.items
    })
    this.get('tests').push(result)
  }
})

module.exports = TestResults