Organizer.Event = Backbone.Model.extend({
  defaults: {
    title: ''
  },
  localStorage: new Backbone.LocalStorage('events')
});