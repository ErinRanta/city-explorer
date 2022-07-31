import React from 'react';
// import placeholder from '../img/map-placeholder.png'

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.lat = props.lat;
        this.lon = props.lon;
        this.mapSearchUrl = 'https://my.locationiq.com/dashboard/accesstokens/view?';
        this.locationApiKey = process.env.REACT_APP_LOCATION_IQ_API_KEY;
    }

    // full url https://my.locationiq.com/dashboard/accesstokens/view?at=cGsuMmE3N2M2YjhhMjRjZTQ0OWU1ZmJlOGYwZjQ4MmRlMjc=

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