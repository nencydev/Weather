import axios from 'axios';

export const fetchWeatherData = async (city) => {
  const response = await axios.get(
    `http://localhost:5000/weather?city=${encodeURIComponent(city)}`
  );
  return response.data;
};
