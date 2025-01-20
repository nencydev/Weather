const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Weather API route
app.get('/weather', async (req, res) => {
  const city = req.query.city;
  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (!city) {
    return res.status(400).json({ error: 'City name is required.' });
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    const { name, main, weather } = response.data;

    res.json({
      name,
      temp: main.temp,
      description: weather[0].description,
    });
  } catch (err) {
    res.status(500).json({ error: 'Error fetching weather data.' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});
