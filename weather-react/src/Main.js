import React from 'react';

import WeatherCondition from './WeatherCondition';
import WeatherForecast from './WeatherForecast';
import { parseWithOptions } from 'date-fns/fp';

function Main(props) {
	return (
		<main>
			<WeatherCondition 
				cityName={props.cityName}
                current={props.current}	
				/>
			<WeatherForecast 
				forecasts={props.forecasts}
                handleChangeLimit={props.handleChangeLimit}
                limit={props.limit}
			/>
		</main>
	);
}

export default Main;