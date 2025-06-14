import { useState } from 'react';
import './App.css';
import Search from './components/Search';
import WeatherCard from './components/WeatherCard';
import { getForecast } from './services/api';

function App() {
  // State to hold the searched city name
  const [city, setCity] = useState('');

  // State to hold the weather forecast data
  const [forecast, setForecast] = useState(null);

  // State to hold any error message
  const [error, setError] = useState('');

  // Function to handle city search and fetch weather data
  const handleSearch = async (searchedCity) => {
    try {
      const data = await getForecast(searchedCity); // Call API to get forecast
      setForecast(data); // Store forecast data in state
      setCity(searchedCity); // Update city name
      setError(''); // Clear any previous error
    } catch (err) {
      setError('City not found'); // Show error if fetch fails
      setForecast(null); // Clear forecast data on error
    }
  };

  return (
    <div className='app'>
      <h2 className='header'>Weather App</h2>

      {/* Search component to input city */}
      <Search onSearch={handleSearch} />

      {/* Display error message if city not found */}
      {error && <p className='error'>{error}</p>}

      {/* Display weather card if forecast data exists */}
      {forecast && <WeatherCard forecast={forecast} />}
    </div>
  );
}

export default App;
