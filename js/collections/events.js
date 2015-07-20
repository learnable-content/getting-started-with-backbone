Organizer.EventsCollection = Backbone.Collection.extend({
  model: Organizer.Event,
  localStorage: new Backbone.LocalStorage('events'),
  nextPosition: function() {
    if (_.isUndefined(this.length) || this.length === 0) {
      return 1
    }
    return this.first().get('position') + 1;
  },
  comparator: function(event1, event2) {
    return event1.get('position') < event2.get('position') ? 1 : -1;
  }
});