import React, { useState } from 'react';

import { Container, Navbar, Form, Button, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setUser } from '../../actions/actions';
import axios from 'axios';
import './login-view.scss';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { handleRegister } = props;


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    /* Send a request to the server for authentication */
    axios.post('https://my-flix80s.herokuapp.com/login', {
      Username: username,
      Password: password
    })
      .then(response => {
        const data = response.data;
        props.onLoggedIn(data);
        props.setUser(username);
      })
      .catch(() => {
        console.log('no such user')
      });
  };

  return (
    <React.Fragment>

      <Navbar className="navbar" variant="dark">
        <Navbar.Brand>myFlix80s</Navbar.Brand>
      </Navbar>
      <Container className='my-4 w-50 p-3'>
        <h2 className='text-center mb-4 white-words'>
          The Ultimate 1980s Movie App
        </h2>
        <Form>

          <Form.Group controlId="formUsername">
            <Form.Label>Login</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              onChange={e => setUsername(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)} />
          </Form.Group>

          {!loading && <Button variant="info" type="submit" onClick={handleSubmit}>
            Login
          </Button>}
          {loading && <Button variant="info" type="submit" disabled>
            <Spinner animation="border" variant="danger" /></Button>}



        </Form>
        <small className='text-center d-block'>
          Not a member yet?
      <span onClick={handleRegister} className='register text-danger ml-2'>
            Sign up for free
      </span>
        </small>
      </Container>

    </React.Fragment >

  );
}

export default connect(null, { setUser })(LoginView);