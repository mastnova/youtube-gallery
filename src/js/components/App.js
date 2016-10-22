var React = require('react');
var AppStore = require('../stores/AppStore');
var AppAPI = require('../utils/AppAPI.js');
var AddForm = require('./AddForm');
var VideoList = require('./VideoList');

function getAppState(){
  return {
    videos: AppStore.getVideos()
  }
}

AppAPI.getVideos();

var App = React.createClass({
  getInitialState: function(){
    return getAppState();
  },

  componentDidMount: function(){
    AppStore.addChangeListener(this._onChange);
  },

  componentUnmount: function(){
    AppStore.removeChangeListener(this._onChange);
  },

  render: function(){
    return(
      <div>
        <AddForm />
        <VideoList videos={this.state.videos} />
      </div>
    );
  },

  _onChange: function(){
    this.setState(getAppState());
  }
});

module.exports = App;
