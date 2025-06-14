import React from 'react'
import WeatherDetails from './WeatherDetails'
import CityDate from './CityDate'
import '../css/WeatherCard.css'

function WeatherCard({forecast}) {

  const country = forecast.city.country;
  const city = forecast.city.name;

  return (
    <div className='weatherCard'>
      <CityDate city={city} country={country}/>
      <WeatherDetails forecast={forecast}/>
      
    </div>
  )
}

export default WeatherCard