Organizer = {
  initialize: function() {
    var eventsList = new Organizer.EventsListView();
    eventsList.render();
  }
};

$(document).ready(function() {
  Organizer.initialize();
});