import React from 'react';

function WeatherDisplay({ weather }) {
  return (
    <div className="weather-display">
      <h2>{weather.name}</h2>
      <p>Temperature: {weather.temp}°C</p>
      <p>Condition: {weather.description}</p>
    </div>
  );
}

export default WeatherDisplay;
