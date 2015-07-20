Organizer.Event = Backbone.Model.extend({
  initialize: function() {
    this.on('invalid', function(model, error) {
      $('#' + _.keys(error)[0]).parent().addClass('has-error');
    })
  },
  defaults: {
    title: '',
    description: ''
  },
  localStorage: new Backbone.LocalStorage('events'),
  validate: function(attrs, options) {
    if (_.isEmpty(attrs.title)) {
      return {'event_title': 'Title has to be present!'}
    }
  }
});
