import React from 'react';

class Location extends React.Component {
    constructor(props) {
        super(props);
        this.lat = props.lat;
        this.lon = props.lon;
        this.mapSearchUrl = 'https://my.locationiq.com/dashboard?';
        this.apiKey = process.env.REACT_APP_API_KEY;
    }

    render() {
        return (
            <div className="map"></div>
               
        )
    }
}

export default Location;















      
    


  










