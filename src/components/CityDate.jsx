import {React, useEffect, useState} from 'react'
import '../css/CityDate.css'

function CityDate({city, country, timezoneOffset}) {

  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  
  useEffect(() => {
    const updateLocalTime = () => {

      // calculates the current UTC time in milliseconds.
      const nowUTC = new Date().getTime() + new Date().getTimezoneOffset() * 60000; //timezoneoffset *60000 to convert minutes to milliseconds

      // adding the target city’s timezone offset to UTC time.
      const localTime = new Date(nowUTC + timezoneOffset * 1000); // timezoneoffset *1000 to convert seconds to milliseconds

      const formattedTime = localTime.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });

    const formattedDate = localTime.toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });

      setTime(formattedTime);
      setDate(formattedDate);
    }

    updateLocalTime();
    const interval = setInterval(updateLocalTime, 1000);

    return () => clearInterval(interval);
  }, [timezoneOffset]);

  
  
  return (
    <div className='cityDate'>
      <h2>{city}, {country}</h2>
      <p>{date}</p>
      <p>{time}</p>
    </div>
  )
}

export default CityDate