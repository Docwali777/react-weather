var React = require("react");
var WeatherForm = require("WeatherForm")
var WeatherMessage = require("WeatherMessage");
var openWeatherMap = require("OpenWeatherMap");

var Weather = React.createClass({
getInitialState: function(){
  return{
    location: "Miami",
    temp: 88
  }
},

handleSearch: function(location){
  var that = this;
openWeatherMap.getTemp(location).then(function(temp){
that.setState({location: location, temp: temp})
}, function(error){alert(error)})
},

render: function(){
var location = this.state.location;
var temp = this.state.temp;
  return(

    <div>
      <h3>Weather Component</h3>
      <WeatherForm onSearch={this.handleSearch}/>
      <WeatherMessage temp={temp} location={location} />
    </div>
  )
}
});

module.exports = Weather;
