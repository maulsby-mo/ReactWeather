var React = require("react");
var {Link} = require("react-router");

var About = (props) => {
    return (
      <div>
        <h1 className="text-center  page-title"> About</h1>
        <p>Welcome to the React Weather App, where you can find out the weather in any city.</p>
        <h4>API used</h4>
        <p>In this app we have used the <a href="http://www.openweathermap.org/" target="_blank" >OpenWeatherMap</a> API</p>
      </div>

    );
  }

module.exports = About;
