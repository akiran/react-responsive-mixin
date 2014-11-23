# react-responsive-mixin

react-responsive-mixin makes building responsive components easy
This mixin adds method to the react component called media()

### Usage
```javascript
this.media(query, handler)
```
##### `query`
query can be either a string or object

##### `handler`
handler can be either a function or object

##### Example

```javascript
var React = require('react');
var ResponsiveMixin = require('react-responsive-mixin');

var Component = React.createClass({
  mixins: [ResponsiveMixin],
  getInitialState: function () {
    return { device: 'small' };
  }
  componentDidMount: function () {
    this.media({maxWidth: 600}, function () {
      this.setState({device: 'small'});
    }.bind(this));
    this.media({minWidth:600, maxWidth: 1024}, function () {
      this.setState({device: 'medium'});
    }.bind(this));
    this.media({minWidth: 1024}, function () {
      this.setState({device: 'large'});
    }.bind(this));
  }
  render: function () {
    return <div>{this.state.device} </div>
  }
});

```



