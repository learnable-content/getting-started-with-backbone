Organizer = {
  initialize: function() {
    Organizer.router = new Organizer.Router();
    Backbone.history.start();
  }
};

$(document).ready(function() {
  Organizer.initialize();
});