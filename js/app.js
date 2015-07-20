Organizer = {
  initialize: function() {
    Organizer.events = new Organizer.Events();
    new Organizer.EventsListView({
      collection: Organizer.events
    });
    Organizer.events.fetch();
    Organizer.events.reset([ {title: 'test1'}, {title: 'test2'}, {title: 'test3'} ]);
  }
};

$(document).ready(function() {
  Organizer.initialize();
});