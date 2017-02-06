var axios = require("axios");

const OPEN_WEATHER_URL = "http://api.openweathermap.org/data/2.5/weather?appid=febc2505e5216ff1ab5900f81b66a027&units=imperial";

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location)
      var requestURL = `${OPEN_WEATHER_URL}&q=${location}`

    return axios.get(requestURL).then(function(res){
          if(res.data.cod && res.data.message){throw new Error(res.data.message)}
          else {
            return res.data.main.temp
          }
      }, function(res){
            throw new Error(res.data.message)
      })
  }
}
//
