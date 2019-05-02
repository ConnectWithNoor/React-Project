import React from 'react'

class Weather extends React.Component {
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
                    <p className="weather__key">Conditions: <span className="weather__value"> {this.props.desc}</span></p>
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