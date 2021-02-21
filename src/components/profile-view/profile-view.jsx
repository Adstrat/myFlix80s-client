import React from "react";
import PropTypes from "prop-types";
import { Card, Form, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

import "./profile-view.scss";

export class ProfileView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      birthday: '',
      password: ''
    };
  }

  // Gets user from API
  getUser = (token, user) => {
    axios.get(`https://my-flix80s.herokuapp.com/users/${user}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        this.setState({
          username: response.data.Username,
          email: response.data.Email,
          birthday: response.data.Birthday,
          password: response.data.password
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // Persisted authentication - keeps user details
  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      });
      this.getUser(accessToken, localStorage.getItem('user'));
    }
  }

  render() {

    return (
      <React.Fragment >
        <Container className='my-3 w-50 p-3'>

          <h2 className=' text-center mb-4 white-words'>
            Profile Details
          </h2>

          <Card className="profile-view">
            <Card.Body>

              <Card.Text>Username: {this.state.username}</Card.Text>
              <Card.Text>Email: {this.state.email}</Card.Text>
              <Card.Text>Birthday: {this.state.birthday}</Card.Text>

              <Link to={`/update`}>
                <div className='center-btn'>
                  <small className='register text-danger ml-2'>
                    Update details
                  </small>
                </div>
              </Link>

            </Card.Body>
          </Card>

          <Link to={`/`}>
            <div className='center-btn'>
              <Button className='return-button' variant='info'>Return to Movie List</Button>
            </div>
          </Link>

        </Container>
      </React.Fragment>
    );
  }
}