
var Song = Backbone.Model.extend();

var SongView = Backbone.View.extend({

  initialize: function() {

  },

  events: {
    "click": "onAllClicks",
    "click button.bookmark": "onClickBookmark",
    "click #let-me-solo-this": "onClickSoloItThen",
    "dblclick": "open",
    "contextmenu ": "showMenu",
    "mouseover .bookmark": "showTooltip"
  },

  onAllClicks: function () {
    console.log("a click event on every element will trigger me");
  },

  onClickBookmark: function() {    
    console.log('bookmark');
  },

  onClickSoloItThen: function(e) {
    e.stopPropagation();
    console.log("im SOLO wiiii");
  },

  // Other event handlers

  open: function() {
    console.log('open');
  },
  
  showMenu: function() {
    console.log('showMenu');
  },
  
  showTooltip: function() {
    console.log('showTooltip');
  },

  render: function () {
    this.$el.html(this.model.get("title") + " <hr><button>Listen</button> <br><button class='bookmark'>Bookmark</button> <br><button id='let-me-solo-this'>Let me solo this</button>");
    return this;
  }
});

var song = new Song({ title: "the title can also trigger a Click event!, now try with the buttons and look at the console logs..." });
var songView = new SongView({ el: "#container", model: song }); 

songView.render();