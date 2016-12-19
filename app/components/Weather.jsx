var React = require("react");
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');


var Weather = React.createClass({
  getInitialState: function(){
    return{
      isLoading : false
    };
  },
  hanleSearch: function(location){
    var that = this;

    this.setState({
      isLoading:true
    });
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location:location,
        temp:temp,
        isLoading:false
      });

    }, function(errorMessage){
      that.setState({isLoading:false});
      alert(errorMessage);
    });

    //this.setState({
    //  location:location,
    //  temp: 23
    //});
  },
  render: function(){
    var {temp,location, isLoading} = this.state;
    function renderMessage(){
      if(isLoading){
        return <p className="text-center">Retrieving Weather Information...</p>;
      }else if (temp && location){
        return <WeatherMessage location={location} temp={temp}/>
      }

    }
    return (
      <div>
        <h1 className="text-center"> Get Weather </h1>
        <WeatherForm onSearch={this.hanleSearch}/>
        {renderMessage()}
      </div>
    );
  }

});
module.exports = Weather;
