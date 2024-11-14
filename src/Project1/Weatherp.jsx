import React from 'react'
import { useState } from 'react'
import './Weatherp.css'

const Weatherp = () => {

    const api={
        key:"a33bc8af616d8b5b875606a2004bf455",
        baseurl:"https://api.openweathermap.org/data/2.5/weather"
    }

    const [search, setSearch]= useState("");
    const [data, setData]=useState("");

    function handleClick() {
        fetch(`${api.baseurl}?q=${search}&appid=${api.key}`)
        .then((res)=>res.json())
        .then((d)=>setData(d))
    }

  return (
    <div className='parent'>
         <div>
          <img src="./sun.png" alt="" id='icons' />
          <span id='nameplate'><b>Weather App</b></span>
        </div>
      <center>
      <nav>
        <label id='label'><b>Weather in your City: </b></label>
        <input onChange={(e)=>setSearch(e.target.value)} placeholder='Enter your City-name' />
        <button onClick={handleClick}><b>Search</b></button>
        </nav>
      </center>

      <div>
      {data.main===undefined ? (
          <p>No data found</p>
        ):(

          <center>

<div className='body-center'>
          <div className='first'>
          <span>
          <img src="./buildings.png" alt="" class='icon' />
            <b>City Name: </b>{data.name}
          </span>
          <br />
          <span>
          <img src="./hot.png" alt="" class='icon' />
          <span><b>Current Temperature: </b>{data.main.temp}</span>
          </span>
          <br />
          <span>
          <img src="./thermometer.png" alt="" class='icon'/>
          <span><b>Minimum Temperature: </b>{data.main.temp_min}</span>
          </span>
         <br />
         <span>
         <img src="./celsius.png" alt="" class='icon' />
         <span><b>Maximum Temperature: </b>{data.main.temp_max}</span>
         </span>
          <br />
          </div>

          <div className='second'>
          <span>
          <img src="./humidity.png" alt="" class='icon' />
          <span><b>Humidity: </b>{data.main.humidity}</span>
          </span>
          <br />
          <span>
          <img src="./cloud.png" alt="" class='icon'/>
          <span><b>Wind Speed: </b>{data.wind.speed}</span>
          </span>
          <br />
          <span>
            <img src="./fog.png" alt="" class='icon'/>
            <span><b>Current Weather condition: </b>{data.weather[0].main}</span>
          </span>
          <br />
          <span>
            <img src="./cloudy.png" alt="" class='icon' />
          <span><b>Weather Description: </b>{data.weather[0].description}</span>
          </span>
          </div>
        </div>

          </center>
        )      
        }
      </div>
      
    </div>
  )
}

export default Weatherp
