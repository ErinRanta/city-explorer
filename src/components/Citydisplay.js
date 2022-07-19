import {Component} from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';



// class Location extends Component {
  
//   constructor(props){
//     super(props);
//     this.state={
//       searchQuery:'',
//       location: {},
//       show: false
//     }
//   }

//   getLocation = async () => {
//     const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;
//     const response = await axios.get(API);
//     console.log(response.data[0]);
//     this.setState({ location:response.data[0], show:true });
//   }
//   handleClose = () => this.setState({ show: false});

  ///render section///

// export default Location;