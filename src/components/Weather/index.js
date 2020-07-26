import React from "react";
import { withRouter } from "react-router";

class index extends React.Component {
  state = {
    currentWeather: {
      name:"",
      weather: [
        {
          main: "",
          description: ""
        }
      ],
      main: {
        temp: 0
      }
    }
  }

  componentDidMount() {
    console.log("Weather component");
    const { currentWeather } = this.state;
    const { cityName } = this.props.match.params;
    
    const url = new URL("http://localhost:8888/weather-service/weathers?cityName=${cityName}");
    var searchName = url.searchParams;
    searchName.set('cityName', cityName );

    const weatherData = fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          currentWeather: json,
        });
      });

    console.log(currentWeather, weatherData);
  }

  render() {
    const { currentWeather } = this.state;
    return (
      <div>
        <h1>{currentWeather.name} Weather</h1>
        <div>-City Name: {currentWeather.name}</div>
        <div>-Weather: {currentWeather.weather[0].main}</div>
        <div>-Detail: {this.state.currentWeather.weather[0].description}</div>
        <div>-Temperature: {currentWeather.main.temp} K </div>
      </div>
    );
  }
}

export default withRouter(index);