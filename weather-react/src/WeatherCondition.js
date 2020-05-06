import React from 'react';
import axios from "axios";

// import compass from 'icon/icon-compass.png';
// import umberella from 'icon/icon-umberella.png';
// import wind from 'icon/icon-wind.png';

import compass from './assets/icons/icon-compass.png';
import umberella from './assets/icons/icon-umberella.png';
import wind from './assets/icons/icon-wind.png';

class WeatherCondition extends React.Component {
    state = {
      cities: "", 
      minCelsius: "",
      humidity: "",
      windSpeed:"",
      windDirection:"",

    };
  
    componentDidMount() {
      axios(
        "https://jr-weather-api.herokuapp.com/api/weather?cc=au&city=brisbane"
      ).then((res) => {
           console.log(res);
         const cities = res.data.data.city.name;  
         const minCelsius = res.data.data.current.minCelsius;
         const humidity = res.data.data.current.humidity;
         const windSpeed = res.data.data.current.windSpeed;
         const windDirection = res.data.data.current.windDirection;

         this.setState({ cities,minCelsius,humidity,windSpeed,windDirection});
         console.log(cities);
         console.log(minCelsius);
      });
    }
  //"humidity":67,"windSpeed":2.73,"windDirection":"SE"
    render() {
        return (
            <section className="weather-condition">
                <div className="weather-condition__location">{this.state.cities}</div>
                <div className="weather-condition__overview">Clear</div>
                <div className="weather-condition__temp">{this.state.minCelsius} c</div>
                <div className="weather-condition__desc">
                    <div>
                        <img src={umberella} />
                        <span className="citem">{this.state.humidity}%</span>
                    </div>
                    <div>
                        <img src={wind} />
                        <span className="citem">{this.state.windSpeed} km/h</span>
                    </div>
                    <div>
                        <img src={compass} />
                        <span className="citem">{this.state.windDirection}</span>
                    </div>
                </div>
            </section>
        );
    }
  }



export default WeatherCondition;