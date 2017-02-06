var React = require("react");

var WeatherMessage = React.createClass({

  render: function(){
    var {temp, location} = this.props
    return(
      <h1>It is {temp} degrees today in {location} </h1>
    )
  }
});

module.exports = WeatherMessage;
//febc2505e5216ff1ab5900f81b66a027
