Organizer.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'events/:id': 'showEvent'
  },
  index: function() {
    Organizer.events = new Organizer.EventsCollection();
    new Organizer.EventsLayout({
      collection: Organizer.events,
      el: '#index'
    });
    Organizer.events.fetch();
  },
  showEvent: function(id) {
    Organizer.events = new Organizer.EventsCollection();
    Organizer.events.fetch();
    new Organizer.ShowEventLayout({
      model: Organizer.events.localStorage.find({id: id}),
      el: '#show'
    } );
  }
});