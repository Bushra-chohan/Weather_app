import {React, useEffect, useState} from 'react'
import '../css/CityDate.css'

function CityDate({city, country}) {

  const [time, setTime] = useState(()=>{
    const now = new Date();
    return now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  })

  const [date, setDate] = useState(() => {
    const now = new Date();
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });
    const dayNum = now.getDate();
    const month = now.toLocaleDateString('en-US', { month: 'long' });
    const year = now.getFullYear();
    return `${day} ${dayNum} ${month} ${year}`;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      setTime(now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }))
      
    },1000)

    return () => clearInterval(interval)
  
  }, [])
  
  
  return (
    <div className='cityDate'>
      <h2>{city}, {country}</h2>
      <p>{date}</p>
      <p>{time}</p>
    </div>
  )
}

export default CityDate