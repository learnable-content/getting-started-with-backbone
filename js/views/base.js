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