Organizer.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'events/:id': 'showEvent'
  },
  index: function() {
    var eventsLayout = new Organizer.EventsLayout({
      collection: Organizer.events
    });
    Organizer.appLayout.render(eventsLayout);

    Organizer.events.fetch();
  },
  showEvent: function(id) {
    Organizer.events.fetch();

    var showLayout = new Organizer.ShowEventLayout({
      model: Organizer.events.localStorage.find({id: id})
    });
    Organizer.appLayout.render(showLayout);
  }
});