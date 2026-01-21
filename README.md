# 🌤️ Weather App

A React-based weather application that provides real-time weather forecasts for any city worldwide with local time display.

**🔗 [Live Demo](https://bushra-chohan.github.io/Weather_app/)**

---

## Features

- 🔍 **City Search** - Search weather for any location globally
- 🌡️ **5-Day Forecast** - Detailed weather predictions
- 🕐 **Local Time** - Displays city's local time using timezone offset
- 🌍 **Country Display** - Shows city name and country
- ⚡ **Real-time Data** - Current conditions via OpenWeatherMap API
- 📱 **Responsive Design** - Clean UI that works on all devices

---

## Tech Stack

React • JavaScript • CSS3 • OpenWeatherMap API • Vite

---

## How It Works

- **Component Architecture**: Modular React components (Search, WeatherCard, WeatherDetails, CityDate)
- **API Integration**: Fetches forecast data using `getForecast()` service
- **State Management**: Uses React hooks (useState) for city, forecast, and error handling
- **Timezone Logic**: Calculates local time based on API's timezone offset
- **Error Handling**: Displays "City not found" for invalid searches

---

## Project Structure

```
src/
├── components/
│   ├── Search.jsx           # Search input component
│   ├── WeatherCard.jsx      # Main weather display
│   ├── WeatherDetails.jsx   # Forecast details
│   ├── CityDate.jsx         # City name & local time
    ├── ConditionItem.jsx    # Adjust headings
│   └── WeatherImage.jsx     # Weather condition icons
├── assets/
├── services/
│   └── api.js               # API service layer
└── App.jsx                  # Main app component
```

---

## Author

**Bushra Chohan**  
[LinkedIn](https://linkedin.com/in/bushrachohan) • [GitHub](https://github.com/Bushra-chohan) • bjchohan@ualberta.ca
