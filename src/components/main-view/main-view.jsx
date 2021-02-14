import React from "react";
import axios from "axios";

import { RegistrationView } from "../registration-view/registration-view";
import { LoginView } from "../login-view/login-view";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import './main-view.scss'

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: null,
      selectedMovie: null,
      user: null,
      hasAccount: true
    };
  }
  componentDidMount() {
    axios.get("https://my-flix80s.herokuapp.com/movies")
      .then(responce => {
        this.setState({
          movies: responce.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  // Handler to navigate to RegistrationView from LoginView 
  handleRegister = () => {
    this.setState({
      hasAccount: false
    });
  }
  //Handler to return to LoginView from RegistrationView
  handleReturnLogin = () => {
    this.setState({
      hasAccount: true
    });
  }

  // Updates user in state on successful login 
  handleLoggedIn = (user) => {
    this.setState({
      user
    });
  }
  //Handler to navigate from MainView to MovieView
  onMovieClick(movie) {
    this.setState({
      selectedMovie: movie
    });
  }
  // Handler to return from MovieView back to MainView 
  onReturnClick() {
    this.setState({
      selectedMovie: null
    });
  }

  render() {
    const { movies, selectedMovie, user, hasAccount } = this.state;

    // on LoginView, when 'New User Sign Up' is clicked, goes to ReistrationView
    if (!hasAccount) return < RegistrationView onReturnLogin={this.handleReturnLogin} />;


    // Renders LoginView if no user
    if (!user) return < LoginView handleLoggedIn={user => this.handleLoggedIn(user)}
      onRegister={this.handleRegister}
    />;


    if (!movies) return <div className="main-view" />;

    return (
      // Navbar -- 
      <React.Fragment>
        <Navbar className="navbar" variant="dark" expand="md">
          <Navbar.Brand href="#home">MyFlix80s</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Profile</Nav.Link>
              <Nav.Link href="http://localhost:1234">LogOut</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Row className="main-view justify-content-md-center">
          {selectedMovie ? (
            <Col md={8}>
              <MovieView movie={selectedMovie}
                onClick={() => this.onReturnClick()}
              />
            </Col>
          )
            : movies.map(movie => (
              <Col md={3}>
                <MovieCard key={movie._id} movie={movie} onClick={movie =>
                  this.onMovieClick(movie)} />
              </Col>
            ))
          }
        </Row>
      </React.Fragment>
    );
  }
}