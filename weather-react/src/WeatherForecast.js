import React from "react";
import axios from "axios";
import classNames from 'classnames'

import { format } from "date-fns";

import ForecastRow from "./ForecastRow";

class WeatherForecast extends React.Component {
  state = {
    forecasts: [],
    addClass:true,
    item:5,
  };

  changeItemsTen = () => {
    this.setState({addClass: false});
    this.setState({item: 10});
    axios(
        "https://jr-weather-api.herokuapp.com/api/weather?cc=au&city=brisbane"
      ).then((res) => {
        //   console.log(res);
        const forecasts = res.data.data.forecast.slice(0, this.state.item);
        this.setState({ forecasts });
      });
  
  }
  changeItemsFive =() => {
    this.setState({addClass: true}); 
    this.setState({item: 5});
    axios(
        "https://jr-weather-api.herokuapp.com/api/weather?cc=au&city=brisbane"
      ).then((res) => {
        //   console.log(res);
        const forecasts = res.data.data.forecast.slice(0, this.state.item);
        this.setState({ forecasts });
      });
  
  }

  componentDidMount() {
    axios(
      "https://jr-weather-api.herokuapp.com/api/weather?cc=au&city=brisbane"
    ).then((res) => {
      //   console.log(res);
      const forecasts = res.data.data.forecast.slice(0, this.state.item);
      this.setState({ forecasts });
    });
  }

  render() {
    return (
      <section className="weather-forecast">
        <div className="forecast__switch">
        <button onClick={this.changeItemsFive} className={classNames({"forecast__switch_0":true,"switch-active":this.state.addClass})}>5 items</button>
        <button onClick={this.changeItemsTen} className={classNames({"forecast__switch_1":true,"switch-active":(!this.state.addClass)})}>10 items</button>  
          
        </div>
        {this.state.forecasts.map((forecast) => {
          const date = new Date(forecast.time * 1000);
          const day = format(date, "EEE");
          const time = format(date, "HH:mm");

          return (
            <ForecastRow
              key={forecast.time}
              day={day}
              high={forecast.maxCelsius}
              low={forecast.minCelsius}
              time={time}
            />
          );
        })}
      </section>
    );
  }
}

export default WeatherForecast;
