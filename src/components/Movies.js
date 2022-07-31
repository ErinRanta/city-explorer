import React from 'react';

import Row from 'react-bootstrap/Row';
import Movie from './Movie.js';

class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error:null
        }
    }
    
     render() {
        return (
            <div className="movies">
            <Row>
                <Movie movies={this.props.movies} />
            </Row>
            </div>
        )
    }
    }
    
    export default Movies;