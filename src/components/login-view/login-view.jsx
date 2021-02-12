import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Navbar, Form, Button } from 'react-bootstrap';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    props.onLoggedIn(username);
  };

  return (
    <React.Fragment>
      <Navbar className="navbar" variant="dark">
        <Navbar.Brand>MyFlix80s - Log In</Navbar.Brand>
      </Navbar>
      <Form>

        <Form.Group controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control type="text" placeholder="Enter username" onChange={e => setUsername(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        </Form.Group>

        <Button variant="info" type="submit" onClick={handleSubmit}>
          Submit
      </Button>
        <Button className='register-button' variant='info'>New User Sign Up</Button>
      </Form>
    </React.Fragment>

  );
}

LoginView.propTypes = {
  Username: PropTypes.string,
  Password: PropTypes.string
}