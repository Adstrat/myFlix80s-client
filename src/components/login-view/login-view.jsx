import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Navbar, Form, Button, Col } from 'react-bootstrap';

import './login-view.scss'

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { onRegister } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    props.handleLoggedIn(username);
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
        </Button>{' '}

        </Form>
        <small className='text-muted text-center d-block'>
          Not a member yet?
      <span onClick={onRegister} className='register text-danger ml-2'>
            Sign up for free
      </span>
        </small>
      </Container>

    </React.Fragment >

  );
}


LoginView.propTypes = {
  Username: PropTypes.string,
  Password: PropTypes.string
};