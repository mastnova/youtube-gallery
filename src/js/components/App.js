var React = require('react');
var AppStore = require('../stores/AppStore');
var AddForm = require('./AddForm');

function getAppState(){
  return {
    videos: AppStore.getVideos()
  }
}

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
    console.log(this.state.videos);
    return(
      <div>
        <AddForm />
      </div>
    );
  },

  _onChange: function(){
    this.setState(getAppState());
  }
});

module.exports = App;
