// import Map from './Map.js';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';


class Main extends React.Component {

    constructor(props){
        super(props);
        this.state={
            cityName: '',
            lat: '',
            lon: '',
            forecast: [],
            error: false,
            searchFor: ''
        };
        this.locationApiKey = process.env.REACT_APP_LOCATION_IQ_API_KEY;
        this.weatherApiKey = process.env.REACT_APP_WEATHERBIT_API_KEY;
        this.locationUrl = "https://us1.locationiq.com/v1/search.php?format=json";
        this.weatherUrl = "https://api.weatherbit.io/v2.0/forecast/daily?";
        this.server = "https://city-explorer-b34ce2.herokuapp.com"
        this.forecastArr = [];
    }
    
    handleInputCity = (event) => {
        this.setState({searchFor: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.handleSearchCity(this.state.searchFor);
    }

    getWeather = (lat,lon) => {
        const weatherQuery = `${this.server}/weather?&cityName=${this.state.searchFor}&lat=${lat}&lon=${lon}`;
        console.log('weatherQuery',weatherQuery);
        axios.get(weatherQuery)

        .then(response => {
            this.setState({forecast: response.data});
            this.forecastArr = response.data.map(el => <Col key={response.data.indexOf(el)}><strong>{el.date}</strong><br />{el.condition}<br />High of {el.high}, low of {el.low}</Col>);
            return this.forecastArr;
        })
        .catch(err => {
            console.log(err);
            this.setState({error:`Sorry, I don't have the weather for that city! (${err.code}: ${err.message})`});
        })
    }

    getMovies = (cityName) => {
        const movieQuery = `${this.server}/movies?cityName=${cityName}`;
        console.log('movieQuery', movieQuery);
        axios.get(movieQuery)

        .then(response => {
            console.log('main move response', response);
            this.moviesArr = response.data.map(el => <Col key={response.data.indexOf(el)}><strong>{el.title}</strong><br />{el.overview}<br />{el.releaseDate}</Col>);
            return this.moviesArr;
        })
        .catch(err => {
            console.log(err);
            this.setState({error:`Sorry, I don't have movie info for that city! (${err.code}: ${err.message})`});
        })
    }
    
    
    handleSearchCity = (searchFor) => {
        const API = `${this.locationUrl}&key=pk.0b8f887fdd8b9e9ce24daafe3e11972a&q=${searchFor}`;
        // const API = `${this.locationUrl}&key=${this.locationApiKey}&q=${searchFor}`;
        axios.get(API)

        .then(response => {
            this.setState({ cityName:this.state.searchFor, lat:response.data[0].lat, lon:response.data[0].lon });
            this.getWeather(this.roundToTwo(response.data[0].lat), this.roundToTwo(response.data[0].lon));
            this.getMovies(this.state.searchFor);
        })

        .catch(err => {
            console.log(err);
            this.setState({error:`Sorry, I don't recognize that one! (${err.code}: ${err.message})`});
        })
    }



    render() {
        return (
        <div className="Main">
            <Alert show={this.state.error} onClose={() => this.setState({error:false})} dismissible>{this.state.error}</Alert>
            <Row>
                <Col id="mainInfo">
                    <div id="searchForm">
                        <Form onSubmit={this.handleSubmit}>
                            <Row>
                                <Col>
                                    <Form.Control type="text" onChange={this.handleInputCity} placeholder="Search for a city" />
                                </Col>
                                <Col>
                                    <Button variant="primary" type="submit">Explore!</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                    <Card id="results">
                        <Card.Body>
                            <Card.Title>{this.state.cityName}</Card.Title>
                            <Card.Subtitle>Latitude: {Math.round(this.state.lat)}, <br />Longitude: {Math.round(this.state.lon)}</Card.Subtitle>
                        </Card.Body>
                    </Card>
                    <Card id="forecastCard">
                        <Card.Title>16-day Forecast</Card.Title>
                        <Card.Body>
                            {this.forecastArr}
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Map key={this.state.cityName} lat={this.state.lat} lon={this.state.lon} />
                </Col>
            </Row>
            <Row>
                {this.moviesArr}
            </Row>
        </div>
        );
    }
  }
  
  export default Main;




