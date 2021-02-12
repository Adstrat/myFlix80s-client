import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

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
        <Navbar.Brand>MyFlix80s - Log In</Navbar.Brand>
      </Navbar>

      <Form>
        <Form.Group controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control type="text" placeholder="Enter username"
            onChange={e => setUsername(e.target.value)} />
        </Form.Group>

        <Form.Group controlID="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
      </Form.Text>
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" placeholder="Password"
            onChange={e => setPassword(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
      </Button>
      </Form>

    </React.Fragment>
  );
}

RegistrationView.PropTypes = {
  Username: PropTypes.string.isRequired,
  Email: PropTypes.string.isRequired,
  Password: PropTypes.string.isRequired,
  Birthday: PropTypes.date
}