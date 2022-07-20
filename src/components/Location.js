import React from 'react';
// import placeholder from '../img/map-placeholder.png'

class Location extends React.Component {
    constructor(props) {
        super(props);
        this.lat = props.lat;
        this.lon = props.lon;
        this.mapSearchUrl = 'https://maps.locationiq.com/v3/staticmap?';
        this.apiKey = process.env.REACT_APP_API_KEY;
    }

    render() {
        return (
            <div className="map">
                {/* <img src={placeholder} alt=""/> */}
                {/* <img src={`${this.mapSearchUrl}key=${this.apiKey}&center=${this.lat},${this.lon}`} alt=""/> */}
            </div>
        )
    }
}

export default Location;















      
    


  










