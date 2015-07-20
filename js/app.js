Organizer = {
  initialize: function() {
    Organizer.events = new Organizer.Events();

    new Organizer.NewEventView();

    new Organizer.EventsListView({
      collection: Organizer.events
    });
    Organizer.events.fetch();
  }
};

$(document).ready(function() {
  Organizer.initialize();
});