Organizer.ShowEventView = Organizer.ItemView.extend({
  initialize: function() {
    this.render();
  },
  template: '#show-event-template'
});

Organizer.NewEventView = Organizer.ItemView.extend({
  tagName: 'form',
  events: {
    'submit': 'createEvent'
  },
  createEvent: function(e) {
    e.preventDefault();
    var title = this.$('#event_title').val();
    var description = this.$('#event_description').val();
    var model = new Organizer.Event();
    var that = this;
    model.save({
      title: title,
      description: description,
      position: Organizer.events.nextPosition()
    }, {
      success: function() {
        Organizer.events.add(model);
        that.el.reset();
        that.$('.has-error').removeClass('has-error');
      }
    })
  },
  template: '#event-form-template'
});

Organizer.EventView = Organizer.ItemView.extend({
  tagName: 'li',
  className: 'list-group-item',
  events: {
    'click .btn-danger': 'removeEvent'
  },
  removeEvent: function(e) {
    e.preventDefault();
    if(confirm('Are you sure?')) {
      this.model.destroy();
    }
  },
  template: '#event-template'
});

Organizer.EventsListView = Organizer.ListView.extend({
  tagName: 'ul',
  className: 'list-group',
  ItemView: Organizer.EventView
});

Organizer.EventsLayoutView = Backbone.View.extend({
  render: function() {
    var template = Handlebars.compile($('#index-template').html());
    this.$el.html(template());

    var newEventView = new Organizer.NewEventView();

    var eventsListView = new Organizer.EventsListView({
      collection: this.collection
    });

    var events = this.$('#events-list');
    var new_event = this.$('#new-event');
    events.append(eventsListView.render().el);
    new_event.append(newEventView.render().el);

    return this;
  },
  initialize: function() {
    this.render();
  }
});