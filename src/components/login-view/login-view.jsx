import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Navbar, Form, Button } from 'react-bootstrap';

export function LoginView(props) {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    props.onLoggedIn(username);
  };

  const LoginView = ({ onLoggedIn, onRegister }) => {
    // State for form input
    const [formData, setFormData] = useState({
      username: '',
      password: '',
    });

    const { username, password } = formData;
  }

  const onRegister = userState('');

  return (
    <React.Fragment>
      <Navbar className="navbar" variant="dark">
        <Navbar.Brand>MyFlix80s - Log In</Navbar.Brand>
      </Navbar>
      <Form>

        <Form.Group controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control type="text" placeholder="Enter username" onChange={e =>
            setUsername(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={e =>
            setPassword(e.target.value)} />
        </Form.Group>

        <Button variant="info" type="submit" onClick={handleSubmit}>
          Submit
      </Button>

        <Button className='register-button' variant='info' onClick={onRegister}
        >New User Sign Up</Button>

      </Form>
    </React.Fragment>

  );
}

LoginView.propTypes = {
  onLoggedIn: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
};
