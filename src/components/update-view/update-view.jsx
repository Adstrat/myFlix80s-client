import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

import "./update-view.scss";

export function UpdateView(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');


  // Updates details of user
  const updateDetails = (e, user) => {
    e.preventDefault();
    axios.put(`https://my-flix80s.herokuapp.com/users/${user}`, {
      Username: username,
      Email: email,
      Birthday: birthday,
      Password: password
    })
      .then(response => {
        const data = response.data;
        console.log(data);
        window.open('/', '_self');
        alert('Account details Updated')
      })
      .catch(e => {
        console.log("Account details didn't update")
      })
  };


  return (
    <React.Fragment >
      <Container className='my-3 w-50 p-3'>
        <h2 className='text-center mb-4 white-words'>
          Edit Details
        </h2>
        <br />

        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label>Change Username</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={e =>
                setUsername(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Change Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={e =>
                setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBirthday">
            <Form.Label>Change Birthday</Form.Label>
            <Form.Control
              type="text"
              value={birthday}
              placeholder="YYYY-MM-DD"
              onChange={e =>
                setBirthday(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={e =>
                setPassword(e.target.value)} />
          </Form.Group>


          <Button className='update-button' variant='info' onClick={updateDetails}>Update</Button>


          <div className='center-btn'>
            <small className='register text-danger ml-2'>
              Delete Account
                  </small>
          </div>



        </Form>
      </Container>
    </React.Fragment>
  );
}

