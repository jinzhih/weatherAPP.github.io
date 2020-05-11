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
				unit={props.unit}
				/>
			<WeatherForecast 
				forecasts={props.forecasts}
                handleChangeLimit={props.handleChangeLimit}
				limit={props.limit}
				unit={props.unit}
			/>
		</main>
	);
}

export default Main;