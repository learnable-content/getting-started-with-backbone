Organizer.Event = Backbone.Model.extend({
  defaults: {
    title: '',
    description: ''
  },
  validation: {
    title: {
      required: true,
      msg: 'Oops, title has to be set...'
    },
    description: {
      required: true
    }
  },
  localStorage: new Backbone.LocalStorage('events'),
  idAttribute: 'position'
});