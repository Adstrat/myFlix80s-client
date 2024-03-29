import React, { useState } from 'react';
import { Container, Form, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';

import './registration-view.scss'

export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');

  const [usernameErr, setUsernameErr] = useState({});
  const [emailErr, setEmailErr] = useState({});
  const [passwordErr, setPasswordErr] = useState({});

  const [loading, setLoading] = useState(false);

  // validates inputed data
  const formValidation = () => {
    const usernameErr = {};
    const passwordErr = {};
    const emailErr = {};
    let isValid = true;

    if (username.trim().length < 6) {
      usernameErr.usernameShort = "Username must be at least 6 characters";
      isValid = false;
    }

    if (password.trim().length < 5) {
      passwordErr.passwordMissing = "Password must be at least 5 characters";
      isValid = false;
    }

    if (!email.includes(".") && !email.includes("@")) {
      emailErr.emailNotEmail = "A valid email address is required";
      isValid = false;
    }

    setUsernameErr(usernameErr);
    setPasswordErr(passwordErr);
    setEmailErr(emailErr);
    return isValid;
  }

  const { handleReturnLogin } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const isValid = formValidation();
    if (isValid) {
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
        alert('New Account created - now log in')
      })
      .catch((error) => {
        setLoading(false);
        if (error.response && error.response.data && error.response.data.errors) {
          error.response.data.errors.forEach((err) => {
            console.log(err)
            switch (err.param){
              case "Username":
              setUsernameErr([err.msg]);
              break
              case "Email":
              setEmailErr([err.msg]);
              break
              case "Password":
              setPasswordErr([err.msg]);
              break
            }
          })
        }
      })
    } else {
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      
      <Container className='form-container'>
      <h1 className='text-center heading'>myFlix80s</h1>
      <h5 className='text-center mb-4 sub-heading'>
      Create an account and start exploring..
        </h5>
      
    
        <Form >
          <Form.Group controlId="formUsername">
            <Form.Label >Sign up for free</Form.Label>
            <Form.Control
              type="text"
              value={username}
              placeholder="Username"
              onChange={e => setUsername(e.target.value)} />
              {Object.keys(usernameErr).map((key) => {
              return (
                <div key={key} style={{ color: "red" }}>
                  {usernameErr[key]}
                </div>
              );
            })}
          </Form.Group>

          <Form.Group controlID="formEmail">
            <Form.Control
              type="email"
              value={email}
              placeholder="Email"
              onChange={e => setEmail(e.target.value)} />
              {Object.keys(emailErr).map((key) => {
              return (
                <div key={key} style={{ color: "red" }}>
                  {emailErr[key]}
                </div>
              );
            })}
            <Form.Text className="text-muted">
          We'll never share your email with anyone else.
          </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBirthday">
            <Form.Control
              type="text"
              value={birthday}
              placeholder="Date of Brith (YYYY-MM-DD)"
              onChange={e => setBirthday(e.target.value)} />
          </Form.Group>
          
          <Form.Group controlId="formPassword">
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={e => setPassword(e.target.value)} />
                          {Object.keys(passwordErr).map((key) => {
              return (
                <div key={key} style={{ color: "red" }}>
                  {passwordErr[key]}
                </div>
              );
            })}
          </Form.Group>

          {!loading && <Button className="registration-btn btn-lg" type="submit" onClick={handleSubmit}>
            Sign Up
          </Button>}
          {loading && <Button variant="info login-btn" type="submit" disabled>
            <Spinner animation="border" variant="danger" /></Button>}

        </Form>

        <small className='text-center d-block'>
      Already have an an account?
       
            <span onClick={handleReturnLogin} className='register ml-2'>
        Return to Log In
            </span>
         
        </small>

      </Container >

    </React.Fragment >
  );
}
