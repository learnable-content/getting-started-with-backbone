Organizer.NewEventView = Backbone.View.extend({
  tagName: 'form',
  events: {
    'submit': 'createEvent'
  },
  model: new Organizer.Event(),
  initialize: function() {
    this.render();
  },
  render: function() {
    var template = Handlebars.compile($('#event-form-template').html());
    this.$el.html( template() );
    $('#new-event').html(this.el);
    return this;
  },
  createEvent: function(e) {
    e.preventDefault();
    var that = this;
    var title = this.$('#event_title').val();
    var description = this.$('#event_description').val();
    this.model.save({
      title: title,
      description: description
    }, {
      success: function () {
        Organizer.EventsList.add(that.model);
        that.el.reset();
        that.$('.has-error').removeClass('has-error');
      }
    });
  }
});

Organizer.EventView = Backbone.View.extend({
  tagName: 'li',
  className: 'list-group-item',
  events: {
    'click a': 'removeEvent'
  },
  render: function() {
    var template = Handlebars.compile($('#event-template').html());
    this.$el.html( template(this.model.toJSON()) );
    return this;
  },
  removeEvent: function(e) {
    e.preventDefault();
    if (confirm('Are you sure?')) {
      this.model.destroy();
    }
  }
});

Organizer.EventsListView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('reset', this.render, this);
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
  },
  tagName: 'ul',
  className: 'list-group',
  render: function() {
    var events_elements = [];
    this.collection.each(function(event) {
      var eventView = new Organizer.EventView({model: event});
      events_elements.push(eventView.render().el);
    });
    this.$el.html(events_elements);
    $('#events-list').append(this.el);
    return this;
  }
});