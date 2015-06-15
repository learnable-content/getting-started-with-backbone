Organizer.ItemView = Backbone.View.extend({
  render: function() {
    var template = Handlebars.compile($(this.template).html());

    var data = {};
    if (this.model) {
      data = _.isFunction(this.model.toJSON) ? this.model.toJSON() : this.model;
    }
    this.$el.html( template(data) );

    return this;
  }
});

Organizer.ListView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('reset', this.render, this);
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
  },
  render: function() {
    var els = [];
    var that = this;
    this.collection.each(function(element) {
      var itemView = new that.ItemView({model: element});
      els.push(itemView.render().el);
    });
    this.$el.html(els);
    return this;
  }
});

Organizer.Layout = Backbone.View.extend({
  render: function() {
    var that = this;
    var template = Handlebars.compile($(this.template).html());

    this.$el.html(template());

    _.each(this.regions, function(selector, name) {
      that[name] = that.$(selector);
    });

    if (this.ready) this.ready();

    return this;
  }
});

Organizer.BaseAppLayout = Backbone.View.extend({
  render: function(view) {
    this.$el.empty();
    view.render();
    this.$el.append(view.el);
  }
});