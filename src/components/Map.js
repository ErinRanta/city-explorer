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

    // full url https://maps.locationiq.com/v3/staticmap?key=pk.0b8f887fdd8b9e9ce24daafe3e11972a&center=48,-122

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