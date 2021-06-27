import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

import "./update-view.scss";

export function UpdateView() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');

  const [usernameErr, setUsernameErr] = useState({});
  const [passwordErr, setPasswordErr] = useState({});
  const [emailErr, setEmailErr] = useState({});

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

  // Updates details of user
  const updateDetails = (e) => {
    e.preventDefault();
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    const isValid = formValidation();
    if (isValid) {
      axios.put(`https://my-flix80s.herokuapp.com/users/${user}`, {
        Username: username,
        Email: email,
        Birthday: birthday,
        Password: password
      },
        {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
          const data = response.data;
          console.log(data);
          window.open('/', '_self');
          alert('Account details Updated')
        })
        .catch(() => {
          console.log("Account details didn't update")
        })
    }
  };

  // Deletes users account
  const handleDelete = () => {
    if (!confirm("Are you sure you want to delete your account?")) return;
    let token = localStorage.getItem("token");
    let user = localStorage.getItem('user');
    axios.delete(`https://my-flix80s.herokuapp.com/users/${user}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.open("/", "_self");
        alert('Your account has been deleted.');
      })
  }


  return (
    <React.Fragment >
      <Container className='form-container'>
        <h2 className='text-center mb-4 white-words'>
          Edit Details
        </h2>
        <br />

        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={e =>
                setUsername(e.target.value)} />
            {Object.keys(usernameErr).map((key) => {
              return (
                <div key={key} style={{ color: "red" }}>
                  {usernameErr[key]}
                </div>
              );
            })}
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={e =>
                setEmail(e.target.value)} />
            {Object.keys(emailErr).map((key) => {
              return (
                <div key={key} style={{ color: "red" }}>
                  {emailErr[key]}
                </div>
              );
            })}
          </Form.Group>

          <Form.Group controlId="formBirthday">
            <Form.Label>Birthday</Form.Label>
            <Form.Control
              type="text"
              value={birthday}
              placeholder="YYYY-MM-DD"
              onChange={e =>
                setBirthday(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={e =>
                setPassword(e.target.value)} />
            {Object.keys(passwordErr).map((key) => {
              return (
                <div key={key} style={{ color: "red" }}>
                  {passwordErr[key]}
                </div>
              );
            })}
          </Form.Group>

          <Button className='update-button' variant='info' onClick={updateDetails}>Update</Button>

          <Link to={`/`}>
            <div className='center-btn'>
              <Button className='return-button' variant='info'>Return to Movie List</Button>
            </div>
          </Link>

          <div className='center-btn'>
            <small
              className='register text-danger ml-2'
              onClick={handleDelete}>
              Delete Account
            </small>
          </div>

        </Form>
      </Container>
    </React.Fragment>
  );
}

