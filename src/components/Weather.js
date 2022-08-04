import React from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.cityName = props.cityName;
        this.lat = Math.round(props.lat);
        this.lon = Math.round(props.lon);
        this.weatherSearchUrl = 'http://localhost:3000/weather?';
        this.state = {  
            error:false,
            forecast:[]
            }
    }    
    
    getWeather = () => {
        const weatherQuery = `${this.weatherUrl}cityName=${this.cityName}&lat=${this.lat}&lon=${this.lon}`;
        console.log('weatherQuery',weatherQuery);
        axios.get(weatherQuery)
        .then(response => {
            this.setState({forecast:response});
        })
        .catch(err => {
            console.log(err);
            this.setState({error:`Sorry, I don't have the weather for that city! Please enter Seattle, Amman, or Paris.`});
            
        })
    }

    render() {
        return(
            <div>
            <Alert show={this.state.error} onClose={() => this.setState({error:false})} dismissible>{this.state.error}</Alert>
            <p>this.lon {this.lon}, forecast {this.forecast}</p>
            {/* <p>{this.getWeather()}</p> */}
            </div>
        )

    }
}

export default Weather;