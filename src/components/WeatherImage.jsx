import React from 'react'
import cloudyImage from '../assets/clouds.avif'
import rainyImage from '../assets/rain.avif'
import sunnyImage from '../assets/sun-clear.webp'

// Utility function to select appropriate weather image based on weather condition
const determineImage = (weatherMain) => {
  if (weatherMain === 'Clouds') return cloudyImage;
  else if (weatherMain === 'Rain') return rainyImage;
  else if (weatherMain === 'Clear') return sunnyImage;
  
};

// Component to display the weather image
function WeatherImage({ weatherMain }) {
  const image = determineImage(weatherMain);
  return <img src={image} alt={weatherMain} />;
}

export default WeatherImage;
