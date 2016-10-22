var AppActions = require('../actions/AppActions');
var Firebase = require('firebase');

var firebaseRef = new Firebase('https://utgall-18619.firebaseio.com/videos');

module.exports = {
  saveVideo: function(video) {
    firebaseRef.push(video);
  },
  getVideos: function() {
    firebaseRef.once('value', function(snapshot){
      var videos = [];
      snapshot.forEach(function(childSnapshot){
        var video = {
          id: childSnapshot.key(),
          title: childSnapshot.val().title,
          video_id: childSnapshot.val().video_id,
          description: childSnapshot.val().description
        };
        videos.push(video);
      });
      AppActions.receiveVideos(videos);
    });
  }
}
