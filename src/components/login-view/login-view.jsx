import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios';
import './login-view.scss'

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { onRegister } = props;

  // Request sent to server for authentication
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://my-flix80s.herokuapp.com/login', {
      Username: username,
      Password: password
    })
      .then(response => {
        const data = response.data;
        props.onLoggedIn(data);
      })
      .catch(e => {
        console.log('no such user')
      });
  };

  return (
    <React.Fragment>
      <Container className='my-3'>
        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label>Login</Form.Label>
            <Form.Control type="text" placeholder="Username" onChange={e =>
              setUsername(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Control type="password" placeholder="Password" onChange={e =>
              setPassword(e.target.value)} />
          </Form.Group>

          <Button variant="info" type="submit" onClick={handleSubmit}>
            Login
        </Button>

        </Form>

        <small className='text-center d-block'>
          Not a member yet?
          <Link to={`/register`} >
            <span className='register text-danger ml-2'>
              Sign up for free
            </span>
          </Link>
        </small>

      </Container>

    </React.Fragment >

  );
}

LoginView.propTypes = {
  Username: PropTypes.string,
  Password: PropTypes.string
};