Organizer = {
  initialize: function() {
    Organizer.events = new Organizer.Events();

    new Organizer.NewEventView();

    new Organizer.EventsListView({
      collection: Organizer.events
    });
    Organizer.events.fetch();

    Organizer.router = new Organizer.Router();
    Backbone.history.start();
  }
};

$(document).ready(function() {
  Organizer.initialize();
});