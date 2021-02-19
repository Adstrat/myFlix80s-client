import React from "react";
import PropTypes from "prop-types";
import { Card, Form, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

import "./profile-view.scss";

export class ProfileView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      birthday: '',
      favoriteMovies: [],
      movies: ''
    };
  }

  render() {
    const { } = this.props;

    return (
      <React.Fragment>
        <Container className='my-3'>
          <Form>

            <Form.Group controlId="formUsername">
              <Form.Label>Username:{this.state.username}</Form.Label>
              <Form.Control type="text" placeholder="enter new user name" onChange={e =>
                setUsername(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email:{this.state.email}</Form.Label>
              <Form.Control type="text" placeholder="enter new email" onChange={e =>
                setUsername(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="update password" onChange={e =>
                setPassword(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBirthday">
              <Form.Label>Birthday:{this.state.birthday}</Form.Label>
              <Form.Control type="password" placeholder="update birthday" onChange={e =>
                setBirthday(e.target.value)} />
            </Form.Group>

          </Form>

        </Container>

      </React.Fragment >
    );
  }
}