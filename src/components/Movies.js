import React from 'react';
import axios from 'axios';

// import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error:null
        }
        this.cityName = props.cityName;
        this.moviesArr = [];
        this.server = process.env.REACT_APP_SERVER_LOCAL
        // this.server = process.env.REACT_APP_SERVER_REMOTE
    }

    getMovies = (cityName) => {
        const movieQuery = `${this.server}/movies?cityName=${cityName}`;
        axios.get(movieQuery)

        .then(response => {
            this.moviesArr = response.data.map(el => <Col key={response.data.indexOf(el)}><strong>{el.title}</strong><br />{el.overview}<br />{el.releaseDate}</Col>);
            return this.moviesArr;
        })
        .catch(err => {
            console.log('error in getMovies',err);
            this.setState({error:`Sorry, I don't have movie info for that city! (${err.code}: ${err.message})`});
        })
    }

    render() {
        this.getMovies(this.cityName);
        if(this.cityName){
        return (
            <div className="movies">
                {this.moviesArr}
            </div>
        )}
        else{
            return '';
        }
    }
    }
    
    export default Movies;