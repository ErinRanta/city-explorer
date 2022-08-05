import React from 'react';
// import placeholder from '../img/map-placeholder.png'

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.lat = props.lat;
        this.lon = props.lon;
        this.mapSearchUrl = 'https://maps.locationiq.com/v3/staticmap?';
        this.locationApiKey = process.env.REACT_APP_LOCATION_IQ_API_KEY;
    }

    render() {
        // console.log('Map.props.lat', this.props.lat, 'Map.lon', this.lon)
        let mapUrl = `${this.mapSearchUrl}key=${this.locationApiKey}&center=${this.lat},${this.lon}&zoom=18`;
        // console.log('mapUrl', mapUrl);
        return (
            <div className="map">
                <img src={`${mapUrl}`} alt=""/>
            </div>
        )
    }
}

export default Map;