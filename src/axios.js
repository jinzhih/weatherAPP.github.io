import axios from 'axios';

export const getWeather = city => {
  return  axios(
		`https://jr-weather-api.herokuapp.com/api/weather?cc=au&city=${city}`
	  ).then((res) => {
		//   console.log(res);
		const data = res.data.data;
		return data;
	  });

};
