_.extend(Backbone.Validation.callbacks, {
  valid: function(view, attr, selector) {
    var control, group;
    control = view.$('[' + selector + '=' + attr + ']');
    group = control.closest('.form-group');
    group.removeClass('has-error');
    group.find('.help-block.error-message').remove();
  },
  invalid: function(view, attr, error, selector) {
    var control, group, target;
    control = view.$('[' + selector + '=' + attr + ']');
    group = control.closest('.form-group');
    group.addClass('has-error');

    if (group.find('.help-block').length === 0) {
      group.append('<p class="help-block error-message"></p>');
    }
    target = group.find('.help-block');
    target.text(error);
  }
});