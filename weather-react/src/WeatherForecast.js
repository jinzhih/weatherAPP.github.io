import React from "react";
import axios from "axios";
import classNames from 'classnames'

import { format } from "date-fns";

import ForecastRow from "./ForecastRow";

class WeatherForecast extends React.Component {
  
  render() {
    const {limit} = this.props;
    const forecasts = this.props.forecasts.slice(0, limit);
    const {unit} = this.props;

    return (
      <section className="weather-forecast">
        <div className="forecast__switch">
        <button onClick={()=>this.props.handleChangeLimit(5)} className={`forecast__switch_0 ${limit === 5 ? 'switch-active' : ''}`}>5 items</button>
        <button onClick={()=>this.props.handleChangeLimit(10)} className={`forecast__switch_1 ${limit === 10 ? 'switch-active' : ''}`}>10 items</button>  
          
        </div>
        {forecasts.map((forecast) => {
          const date = new Date(forecast.time * 1000);
          const day = format(date, "EEE");
          const time = format(date, "HH:mm");

          return (
            <ForecastRow
              unit={unit}
              key={forecast.time}
              day={day}
              high={unit === "C" ? forecast.maxCelsius : forecast.maxFahrenheit}
              low={unit === "C" ? forecast.minCelsius : forecast.minFahrenheit}
              time={time}
            />
          );
        })}
      </section>
    );
  }
}

export default WeatherForecast;
