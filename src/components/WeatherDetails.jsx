import React from 'react'
import '../css/WeatherDetails.css'
import WeatherImage from './WeatherImage';
import ConditionItem from './ConditionItem';


function WeatherDetails({forecast}) {

  // Extract the first forecast entry
  const firstData = forecast.list[0];
  
  // Destructure needed values
  const temp = Math.round(firstData.main.temp); 
  const humidity = firstData.main.humidity;
  const pressure = firstData.main.pressure;
  const wind = firstData.wind.speed;
  const weatherMain = firstData.weather[0].main;

  return (
    <div>
      <div className='tempImage'>
        <WeatherImage weatherMain = {weatherMain}/>
        <div className='temp'>
          <h2>{temp}°C</h2>
          <p>{weatherMain}</p>
        </div>
      </div> <hr />

      <div className='conditions'>
        <ConditionItem label="Humidity" value={`${humidity}%`} />
        <ConditionItem label="Wind" value={`${wind} km/h`} />
        <ConditionItem label="Pressure" value={`${pressure} hPa`} />
      </div>
    </div>
  )
}

export default WeatherDetails