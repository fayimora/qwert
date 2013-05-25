App.Router.map -> # routes here

App.IndexRoute = Ember.Route.extend
  model: -> ['red', 'yellow', 'blue']
