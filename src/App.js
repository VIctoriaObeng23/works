import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Users from './Components/Users'
import AddUserForm from './Components/AddUserForm';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      users: [
        {
          name: "victoria",
          email: "vic44@gmail.com",
          gen: 30
        },
        {
          name: "Eunice",
          email: "nice60@gmail.com",
          gen: 22  
        },

        {
          name: "mina",
          email: "mina@gmail.com",
          gen: 19
        },

      ]
    }
  }
  addNewUser = (user) => {
    this.setState({
      users: [...this.state.users, user]
    })
  }
  render () {
  return (
    <>
    <Container fluid style ={{marginTop: "4rem"}} > 
      <Row>
        <Col md="4">
         <AddUserForm addUser = {this.addNewUser} />
        </Col>
        <Col> <Users usersData={this.state.users} /> </Col>

      </Row>
    </Container>
    
    </>
    
  );
 }
}

export default App;
