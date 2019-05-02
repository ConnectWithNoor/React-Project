import React from 'react';

import Titles from './Components/Titles';
import Form from './Components/Form'
import Weather from './Components/Weather'

const API_KEY = '07d19b37039a147a5f2f636f8e24ab90';

class App extends React.Component {

  state = {
    temperature: undefined,
    city: '',
    country: '',
    humidity: '',
    windSpeed: '',
    description: '',
    error: ''
  }

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.city.value;
    const country = e.target.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);

    const data = await api_call.json()

    if (city && country) {

      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        description: data.weather[0].description,
        error: ''
      })
    }
    else {

      this.setState({
        temperature: '',
        city: '',
        country: '',
        humidity: '',
        windSpeed: '',
        description: '',
        error: 'Please enter city and country name'
      })
    }

  }

  render() {
    return (
      <div>
        <div className="wrapper" >
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-5 title-container">
                  < Titles />
                </div>
                <div className="col-7 form-container">
                  < Form getWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    windSpeed={this.state.windSpeed}
                    desc={this.state.description}
                    err={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default App