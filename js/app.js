Organizer = {
  initialize: function() {
    Organizer.EventsList = new Organizer.Events();
    new Organizer.EventsListView({collection: Organizer.EventsList});
    new Organizer.NewEventView();

    Organizer.EventsList.fetch();
  }
};

$(document).ready(function() {
  Organizer.initialize();
});