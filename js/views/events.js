Organizer.EventsListView = Backbone.View.extend({
  render: function() {
    this.$el.html('<h2>Our events:</h2>');
  },
  el: '#events-list'
});