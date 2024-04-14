
const Song = Backbone.Model.extend({
  defaults: {
    duration: 120000
  },
  initialize: function () {
    // console.log("A new song has been created.");
  }
});

const Songs = Backbone.Collection.extend({
  model: Song
});


const SongView = Backbone.View.extend({
  el: '#container',
  render: function() {
    console.log("Song View render $el", this.$el);
    this.$el.html('Holiwis 2');

    return this;
  }
});

const NewView = Backbone.View.extend({
  tagName: 'section',
  className: 'my-view-section',
  id: '123',
  attributes: {
    "data-something": 'something'
  },
  render: function () {
    console.log("New View render $el", this.$el);

    this.$el.html('new View');
    return this;
  }
});

const myNewView = new NewView();

const mySong = new Song({
  title: "holi",
  duration: 300000,
  genre: 'Jazz',
});

const songs = new Songs([
  new Song({ title: "Song 1" }),
  new Song({ title: "Song 2" }),
  new Song({ title: "Song 3" }),
  mySong
]);

songs.add(new Song({ title: "song 0" }), { at: 0 } )

console.log(songs);


const songView = new SongView({ el: "#container" });
songView.render();

console.log($('#container').html());

const ItemView = Backbone.View.extend({
  tagName: 'li'
});

const BodyView = Backbone.View.extend({
  el: 'body'
});

const item = new ItemView();
const body = new BodyView();

$('#container').html( myNewView.render().$el );
console.log($('#container'));

