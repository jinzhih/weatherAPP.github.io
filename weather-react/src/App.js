
import React from 'react';
import axios from 'axios';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Navigation from './Navigation';

import './App.css';

class App extends React.Component{
	state = {
		cityName: "",
		current: {},
		forecasts: [],
		limit: 5,
	}


componentDidMount(){
	axios(
		"https://jr-weather-api.herokuapp.com/api/weather?cc=au&city=brisbane"
	  ).then((res) => {
		//   console.log(res);
		const data = res.data.data;
		const cityName = data.city.name;
		const current = data.current;
		const forecasts = data.forecast.slice(0, 10);
		this.setState({ cityName, current, forecasts });
	  });

}

handleChangeLimit = limit => {
	this.setState({limit});
}
render(){

	return (
		<div className="weather-channel__container">
			<Header />
			<Navigation />
			<Main 
				cityName = {this.state.cityName}
				current = {this.state.current}
				forecasts = {this.state.forecasts}
				limit = {this.state.limit}
				handleChangeLimit = {this.handleChangeLimit}
			
			/>
			<Footer />
	  	</div>
	);

}
}



export default App;
