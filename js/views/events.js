Organizer.EventsListView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'reset', this.render);
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(this.collection, 'remove', this.render);
  },
  render: function() {
    var events_elements = [];
    this.collection.each(function(event) {
      var eventView = new Organizer.EventView({model: event});
      events_elements.push(eventView.render().el);
    });
    this.$el.append(events_elements);
    $('#events-list').html(this.el);
  },
  tagName: 'ul',
  className: 'list-group'
});

Organizer.EventView = Backbone.View.extend({
  tagName: 'li',
  className: 'list-group-item',
  render: function() {
    var template = Handlebars.compile($('#event-template').html());
    this.$el.html(template(this.model.toJSON()));
    return this;
  },
  events: {
    'click a': 'removeEvent'
  },
  removeEvent: function() {console.log(this);}
});