
import React from 'react';
import axios from 'axios';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Navigation from './Navigation';
import {getWeather} from "./axios";

import './App.css';

class App extends React.Component{
	state = {
		input: "",
		cityName: "",
		current: {},
		forecasts: [],
		limit: 5,
		unit: "C",

	}


componentDidMount(){
	getWeather('Brisbane').then(this.updateWeather);

}

updateWeather = (data) =>{
	const cityName = data.city.name;
		const current = data.current;
		const forecasts = data.forecast.slice(0, 10);
		this.setState({ cityName, current, forecasts })
};

handleChangeLimit = limit => {
	this.setState({limit});
};

handleInputChange = event =>{
	const value = event.target.value;
	this.setState({ input : value });
};

handleSearch = () =>{
	getWeather(this.state.input).then(this.updateWeather);
}

toggleUnit = () =>{
	this.setState(state => ({unit: state.unit==="C" ? "F" : "C"}));
}

render(){

	return (
		<div className="weather-channel__container">
			<Header />
			<Navigation 
			input = {this.state.input}
			handleInputChange = {this.handleInputChange}
			handleSearch = {this.handleSearch}
			unit = {this.state.unit}
			toggleUnit = {this.toggleUnit}
			/>
			<Main 
				cityName = {this.state.cityName}
				current = {this.state.current}
				forecasts = {this.state.forecasts}
				limit = {this.state.limit}
				handleChangeLimit = {this.handleChangeLimit}
				unit = {this.state.unit}
			
			/>
			<Footer />
	  	</div>
	);

}
}



export default App;
