# react-responsive-mixin

react-responsive-mixin makes building responsive components easy
This mixin adds method to the react component called media().
This is a wrapper around [enquire.js](http://wicky.nillia.ms/enquire.js/)

### Usage
```javascript
this.media(query, handler)
```
##### `query`
query is a media query definition in either string or object format.
this mixin internally uses [json2mq](https://github.com/akiran/json2mq) to convert media query from object to string format.

##### `handler`
handler is a function that needs to be executed when media query matches. 
handler can also be an object according to [enquire.js](http://wicky.nillia.ms/enquire.js/#api) API

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



