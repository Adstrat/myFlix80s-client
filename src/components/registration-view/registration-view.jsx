import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from "react-router-dom";

import './registration-view.scss'

export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://my-flix80s.herokuapp.com/users', {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    })
      .then(response => {
        const data = response.data;
        console.log(data);
        window.open('/', '_self');
      })
      .catch(e => {
        console.log('error registering the user')
      })
  };

  return (
    <React.Fragment>
      <Container className='my-3'>

        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label>Registration</Form.Label>
            <Form.Control
              type="text"
              value={username}
              placeholder="Username"
              onChange={e => setUsername(e.target.value)} />
          </Form.Group>

          <Form.Group controlID="formEmail">
            <Form.Control
              type="email"
              value={email}
              placeholder="Email"
              onChange={e => setEmail(e.target.value)} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
          </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBirthday">
            <Form.Control
              type="text"
              value={birthday}
              placeholder="Date of Brith"
              onChange={e => setBirthday(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={e => setPassword(e.target.value)} />
          </Form.Group>

          <Form.Group controlId='formConfirmPassword'>
            <Form.Control
              type='password'
              value={confirmPassword}
              placeholder='Confirm Password'
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="info" type="submit" onClick={handleSubmit}>
            Sign Up
          </Button>
        </Form>

        <small className='text-muted text-center d-block'>
          Already have an an account?
          <Link to={`/`} >
            <span className='register text-danger ml-2'>
              Return to Log In
            </span>
          </Link>
        </small>

      </Container>

    </React.Fragment>
  );
}

RegistrationView.propTypes = {
  username: PropTypes.string,
  email: PropTypes.string,
  birthday: PropTypes.string,
  password: PropTypes.string,
  confirmPassword: PropTypes.string
};