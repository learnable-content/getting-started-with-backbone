Organizer = {
  initialize: function() {
    Organizer.events = new Organizer.EventsCollection();
    
    Organizer.appLayout = new Organizer.BaseAppLayout({
      el: '#app'
    });

    Organizer.router = new Organizer.Router();
    Backbone.history.start();
  }
};

$(document).ready(function() {
  Organizer.initialize();
});