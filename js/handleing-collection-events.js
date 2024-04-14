
const Song = Backbone.Model.extend();

const Songs = Backbone.Collection.extend({
  model: Song
});

const SongView = Backbone.View.extend({
  
  tagName: "li",

  render: function () {
    this.$el.html(this.model.get("title"));
    this.$el.attr("id", this.model.id);

    return this;
  }
});

const SongsView = Backbone.View.extend({
  tagName: "ul",

  initialize: function () {
    this.model.on("add", this.onSongAdded, this); 
    this.model.on("remove", this.onSongRemoved, this);
  },

  onSongAdded: function (song) {
    const songView = new SongView({ model: song });
    this.$el.append(songView.render().$el);
  },

  onSongRemoved: function (song) {
    this.$(`li#${song.id}`).remove();
  },

  render: function () {
    const self = this;

    this.model.each( function(song) {
      const songView = new SongView({ model: song }); 
      self.$el.append(songView.render().$el);
    });
  }
});

const songs = new Songs([
  new Song({ id: 1, title: "Blue in Green" }), 
  new Song({ id: 2, title: "So What" }),
  new Song({ id: 3, title: "All Blues" })
]);

const songsView = new SongsView({ el: "#songs", model: songs }); 

songsView.render();