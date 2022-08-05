// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import React from 'react';

// class Input extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {searchFor: ''}
//         this.handleSearchCity = props.handleSearchCity();
//     }

//     handleInputCity = event => {
//         this.setState({searchFor: event.target.value});
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();
//         this.handleSearchCity(this.state.searchFor);
//     }

//     render() {
//         return (
//             <Form onSubmit={this.handleSubmit}>
//                 <Form.Label>Search for a City</Form.Label>
//                 <Form.Control type="text" onChange={this.handleInputCity} placeholder="City" />
//                 <Button type="submit">Explore!</Button>
//             </Form>
//         )
//     }
// }

// export default Input;