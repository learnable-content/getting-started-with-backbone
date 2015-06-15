Organizer.Event = Backbone.Model.extend({
  defaults: {
    title: ''
  }
});

var unsafe = new Organizer.Event({body: '<script>alert("hacked!");</script>'});