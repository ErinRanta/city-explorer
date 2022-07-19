import {Component} from 'react';
// import axios from 'axios';
import Card from 'react-bootstrap/Card';



class Location extends Component {
  
  constructor(props){
    super(props);
    this.state={
      searchQuery:'',
      location: {},
      show: false
    }
  }

  getLocation = async () => {
    const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;
    const response = await axios.get(API);
    console.log(response.data[0]);
    this.setState({ location:response.data[0], show:true });
  }
  handleClose = () => this.setState({ show: false});


      render(){
        return (
          <>
            <input style={{marginRight: '1rem', border: '2px solid gray', paddingRight: '2rem'}}onChange={(e) => this.setState({searchQuery: e.target.value })} placeholder="Search by City Name"></input>
            <button style={{ border: '2px solid gray'}} onClick={this.getLocation}>Explore!</button>  
            <Card style={{ width: '30rem', margin: '2rem auto', backgroundColor: '#ebdf94'}}>
              <Card.Title>{this.state.location.display_name}</Card.Title>
              <Card.Body>
              <img style={{ width: '100%' }} className='map' src={`https://maps.locationiq.com/v3/staticmap?key=${key}&center=${this.state.location.lat},${this.state.location.lon}&zoom=12&size=480x480`} alt="" />
              </Card.Body>
              <Card.Text> City Latitude: {this.state.location.lat} </Card.Text>
              <Card.Text style={{ paddingBottom: '2rem'}}> City Longitude: {this.state.location.lon}</Card.Text>
            </Card>
          </>
        )
      }
    }


  











export default Location;