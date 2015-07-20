Organizer = {
  initialize: function() {
    var events = new Organizer.Events();
    var eventsList = new Organizer.EventsListView({
      collection: events
    });
    events.fetch({
      success: function() {
        events.reset([ {title: 'test1'}, {title: 'test2'}, {title: 'test3'} ]);
        eventsList.render();
      },
      error: function() {
        console.error('error');
      }
    });
  }
};

$(document).ready(function() {
  Organizer.initialize();
});