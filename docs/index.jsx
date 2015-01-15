var React = require('react');
var ResponsiveMixin = require('../');

var Docs = React.createClass({
  mixins: [ResponsiveMixin],
  componentDidMount: function () {
    console.log(this.getDOMNode().getAttribute('data-reactid'));
  },
  render: function () {
    return (
      <div>docs</div>
    );
  }
});

React.render(<Docs />, document.body);