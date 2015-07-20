Organizer.Router = Backbone.Router.extend({
  routes: {
    'test': 'greet'
  },
  greet: function() {
    console.log('greet');
  }
});