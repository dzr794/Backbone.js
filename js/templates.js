const Song = Backbone.Model.extend();

const SongView = Backbone.View.extend({
  
  initialize: function(){
    this.model.on('change', this.render, this);
  },


  render: function(){
    const templateFn = _.template( $('#songTemplate').html() ); // returns a function
    console.log(this.model);
    const html = templateFn( this.model.toJSON() );
    this.$el.html( html );

    return this;
  }
});

const song = new Song({ title: 'La vida e bella', plays: 10000 });

const songView = new SongView({ el: '#container', model: song });

songView.render();






