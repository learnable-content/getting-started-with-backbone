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

Organizer.EventsLayout = Organizer.Layout.extend({
  template: '#events-layout-template',
  regions: {
    eventsList: '#events-list',
    newEvent: '#new-event'
  },
  ready: function() {
    var newEventView = new Organizer.NewEventView();

    var eventsListView = new Organizer.EventsListView({
      collection: this.collection
    });

    this.eventsList.append(eventsListView.render().el);
    this.newEvent.append(newEventView.render().el);
  }
});

Organizer.ShowEventLayout = Organizer.Layout.extend({
  template: '#show-event-layout-template',
  regions: {
    event: '#event'
  },
  ready: function() {
    var eventView = new Organizer.ShowEventView({
      model: this.model
    });
    this.event.append(eventView.render().el);
  }
});