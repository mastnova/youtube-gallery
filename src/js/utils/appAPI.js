var AppActions = require('../actions/AppActions');
var Firebase = require('firebase');

module.exports = {
  saveVideo: function(video) {
    var firebaseRef = new Firebase('https://utgall-18619.firebaseio.com/videos');
    firebaseRef.push(video);
  }
}
