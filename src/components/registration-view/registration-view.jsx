import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Navbar, Form, Button } from 'react-bootstrap';

import './registration-view.scss'

export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, email, password, birthday);
    props.onLoggedIn(username);
  };

  return (
    <React.Fragment>
      <Navbar className="navbar" variant="dark">
        <Navbar.Brand>myFlix80s</Navbar.Brand>
      </Navbar>
      <Container className='my-5'>
        <h1 className='text-center h3 mb-4 background-blue'>
          The Ultimate 1980s Movie App
        </h1>

        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label>Registration</Form.Label>
            <Form.Control type="text" placeholder="Username"
              onChange={e => setUsername(e.target.value)} />
          </Form.Group>

          <Form.Group controlID="formEmail">
            <Form.Control type="email" placeholder="Email"
              onChange={e => setEmail(e.target.value)} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
          </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBirthday">
            <Form.Control type="text" placeholder="Date of Brith"
              onChange={e => setBirthday(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Control type="password" placeholder="Password"
              onChange={e => setPassword(e.target.value)} />
          </Form.Group>

          <Button variant="info" type="submit" onClick={handleSubmit}>
            Sign Up
          </Button>
        </Form>
      </Container>


    </React.Fragment>
  );
}

RegistrationView.propTypes = {
  Username: PropTypes.string,
  Email: PropTypes.string,
  Password: PropTypes.string,
  Birthday: PropTypes.date
};