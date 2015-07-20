Organizer.Events = Backbone.Collection.extend({
  model: Organizer.Event,
  localStorage: new Backbone.LocalStorage('events')
});