Organizer.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'events/:id': 'showEvent'
  },
  index: function() {
    Organizer.events = new Organizer.EventsCollection();
    new Organizer.EventsLayoutView({
      collection: Organizer.events,
      el: '#index'
    });
    Organizer.events.fetch();
  },
  showEvent: function(id) {
    Organizer.events = new Organizer.EventsCollection();
    Organizer.events.fetch();
    new Organizer.ShowEventView( {model: Organizer.events.localStorage.find({id: id})} );
  }
});