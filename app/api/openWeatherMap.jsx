var axios = require('axios');


const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=0a89e78a9c505368a9c5914c4f8b0562&units=imperial';

module.exports = {
  getTemp:function(location){
      var encodedLocation = encodeURIComponent(location);
      // using query string
      var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
      //axios uses promises so we can use .then
      console.log('url', requestUrl);
      return axios.get(requestUrl).then(function(res){
          //success callback
          //the following if statements serves to cover error checking
          if(res.data.cod && res.data.message){
              throw new Error(res.data.message);
          }else{
            return res.data.main.temp;
          }
      }, function(res){
        // failure callback
        //  throw new Error(res.data.message);
          throw new Error("Unable to fetch weather for that location.");
      });
  }
}

//
