
var Song = Backbone.Model.extend({
  defaults: {
    listeners: 0
  }
});

var SongView = Backbone.View.extend({
  initialize: function () {
    this.model.on("change", this.onModelChange, this);
  },

  onModelChange: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.model.get("title") + " - Listeners: " + this.model.get("listeners"));
    return this;
  }
});

var song = new Song({ title: "Blue in Green" });
var songView = new SongView({ el: "#container", model: song });
songView.render();