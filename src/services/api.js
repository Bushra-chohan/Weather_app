const API_KEY = '40ea44ab609b306df707680c8a799992';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export async function getForecast(city){
  try{
    const response = await fetch (`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`)

    if(!response.ok){
      throw new Error('City not found')
    }

    const data = await response.json();
    return data;

  } catch (error){
    throw error
  }
}