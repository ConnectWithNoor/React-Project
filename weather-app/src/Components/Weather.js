import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faSun, faCloudRain, faBolt } from '@fortawesome/free-solid-svg-icons'

const weatherIcon = [
    { condition: 'few clouds', icon: faCloud },
    { condition: 'clear sky', icon: faSun },
    { condition: 'shower rain', icon: faCloudRain },
    { condition: 'thunderstorm', icon: faBolt}
]

class Weather extends React.Component {

    getIcon = (condition) => {
        const temp = weatherIcon.find(weather => {
            return weather.condition === condition
        })
        if(temp)
            return temp.icon
    }

    render() {
        return (
            <div className="weather__info">
                {
                    this.props.city && this.props.country &&
                    <p className="weather__key">Location: <span className="weather__value"> {this.props.city}, {this.props.country}</span></p>
                }
                {
                    this.props.temperature &&
                    <p className="weather__key"> Temperature: <span className="weather__value"> {this.props.temperature}</span></p>
                }
                {
                    this.props.humidity &&
                    <p className="weather__key">Humidity: <span className="weather__value"> {this.props.humidity}</span></p>
                }
                {
                    this.props.windSpeed &&
                    <p className="weather__key">Wind Speed: <span className="weather__value"> {this.props.windSpeed}</span></p>
                }
                {
                    this.props.desc &&
                    <p className="weather__key">Conditions: <span className="weather__value"> {this.props.desc}</span>
                        <FontAwesomeIcon className="weather__icon" icon = {this.getIcon(this.props.desc)} />                    </p>
                }
                {
                    this.props.err &&
                    <p className="weather__error">Invalid Values: {this.props.err}</p>
                }
            </div>
        )
    }
};

export default Weather