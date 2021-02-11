import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    props.onLoggedIn(username);
  };

  const registerButton = {
    movie =>
  this.onMovieClick(movie)
}

return (
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

    <Button className='reg-button' variant='info' onClick={registerButton}>Register</Button>

  </Form>
);
}

LoginView.propTypes = {
  Username: PropTypes.string,
  Password: PropTypes.string
}