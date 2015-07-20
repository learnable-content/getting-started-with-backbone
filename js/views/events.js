Organizer.EventsListView = Backbone.View.extend({
  render: function() {
    var events = [
      {title: 'go to work'},
      {title: 'meet with friends'},
      {title: 'visit grandma'}
    ];
    var events_elements = [];
    _.each(events, function(event) {
      var eventView = new Organizer.EventView({model: event});
      events_elements.push(eventView.render().el);
    });
    this.$el.append(events_elements);
    $('#app').html(this.$el.html());
  },
  tagName: 'ul'
});

Organizer.EventView = Backbone.View.extend({
  tagName: 'li',
  render: function() {
    this.$el.html(this.model.title + "<a href='#' class='btn btn-danger'>remove</a>");
    return this;
  },
  events: {
    'click a': 'removeEvent'
  },
  removeEvent: function() {console.log(this);}
});