var React = require('react');
var ResponsiveMixin = require('../');

var Component = React.createClass({
  mixins: [ResponsiveMixin],
  getInitialState: function () {
    return { url: '/img/large.img' };
  },
  componentDidMount: function () {
    this.media({maxWidth: 640}, function () {
      this.setState({url: '/img/small.jpg'});
    }.bind(this));
    this.media({minWidth:641, maxWidth: 1200}, function () {
      this.setState({url: '/img/medium.jpg'});
    }.bind(this));
    this.media({minWidth: 1201}, function () {
      this.setState({url: '/img/large.jpg'});
    }.bind(this));
  },
  render: function () {
    return (
      <div className=''>
        <h4>Demo</h4> 
        <p>Resize the browser window and see image changes when browser hit breakpoint 640px, 1200px</p>
        <img src={this.state.url} />
      </div>
    );
  }
});

module.exports = Component;