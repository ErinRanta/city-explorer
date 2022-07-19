import {Component} from 'react';
import { Container } from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
// import SearchForm from './SearchForm';
import Location from './Location';
const axios = require('axios').default;



class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            displayName: '', 
            latitude: '', 
            longitude: '', 
            mapImage: '',
            showModal: false,
            showAlert: false,
            errorMessage: ''
        };
    }
    
    handleCitySearch = searchTerm => {
       
        axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LIQ_KEY}&q=${searchTerm}&limit=1&format=json`)
            .then(response => {
                let city = response.data[0];
                this.setState({
                    displayName: city.display_name, 
                    latitude: city.lat, 
                    longitude: city.lon, 
                    mapImage: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LIQ_KEY}&center=${city.lat},${city.lon}&zoom=12`,
                    showModal: true
                })
            }
    }

    
    render(){
        return(
            <Container style={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                
                <Alert show={this.state.showAlert} variant="danger" onClose={() => this.setState({showAlert: false})} dismissible>
                    <Alert.Heading>
                        Whoops, Error!
                    </Alert.Heading>
                    {this.state.errorMessage}
                </Alert>
                <Location 
                    displayName={this.state.displayName} 
                    latitude={this.state.latitude} 
                    longitude={this.state.longitude} 
                    imageURL={this.state.mapImage}
                    show={this.state.showModal}
                    handleClose={() => this.setState({showModal: false})}
                    />
            </Container>
        );
    }

}

export default Main;


