import React, { useState } from 'react';
import WeatherDisplay from './components/WeatherDisplay';
import { fetchWeatherData } from './api/weather';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const handleFetchWeather = async () => {
    if (!city) {
      setError('Please enter a city name.');
      return;
    }

    try {
      const data = await fetchWeatherData(city);
      setWeather(data);
      setError('');
    } catch {
      setError('Unable to fetch weather data. Please try again.');
      setWeather(null);
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleFetchWeather}>Get Weather</button>
      </div>
      {error && <p className="error">{error}</p>}
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
}

export default App;
