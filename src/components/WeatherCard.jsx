import React from 'react'
import WeatherDetails from './WeatherDetails'
import CityDate from './CityDate'
import '../css/WeatherCard.css'

function WeatherCard({forecast}) {

  const country = forecast.city.country;
  const city = forecast.city.name;
  const timezoneOffset = forecast.city.timezone;

  return (
    <div className='weatherCard'>
      <CityDate city={city} country={country} timezoneOffset={timezoneOffset}/>
      <WeatherDetails forecast={forecast}/>
      
    </div>
  )
}

export default WeatherCard