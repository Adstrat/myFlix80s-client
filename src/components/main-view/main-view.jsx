import React from "react";
import axios from "axios";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { RegistrationView } from "../registration-view/registration-view";
import { LoginView } from "../login-view/login-view";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { DirectorView } from "../director-view/director-view";
import { GenreView } from "../genre-view/genre-view";

import { Container, Row, Navbar, Nav } from 'react-bootstrap';

import './main-view.scss'

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      user: null
    };
  }
  // Gets movies from API
  getMovies(token) {
    axios.get('https://my-flix80s.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // Persisted authentication - keeps user logged in
  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      });
      this.getMovies(accessToken);
    }
  }

  // Updates user in state on successful login
  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username
    });
    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
  }

  onLogOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    console.log('logged out successfully');
    window.open('/', '_self');
  }

  render() {
    const { movies, user } = this.state;

    if (!movies) return <div className="main-view" />;

    return (
      // Navbar -- 
      <Router>
        <React.Fragment>
          <Navbar className="navbar" variant="dark" expand="md">
            <Navbar.Brand href="#home">myFlix80s</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Profile</Nav.Link>
                <Nav.Link onClick={() => this.onLogOut()}>LogOut</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Container className='my-3'>
            <Row className="main-view justify-content-md-center">

              <Route exact path='/' render={() => {
                if (!user) return < LoginView onLoggedIn={user => this.onLoggedIn(user)}
                />;
                return movies.map(m => <MovieCard key={m._id} movie={m} />)
              }
              } />
              <Route path='/register'
                render={() => <RegistrationView />} />

              <Route path='/movies/:movieId'
                render={({ match }) => <MovieView movie={movies.find(m => m._id === match.params.movieId)} />} />

              <Route path='/genres/:name'
                render={({ match }) => {
                  if (!movies) return <div className='main-view' />;
                  return <GenreView genre={movies.find(m => m.Genre.Name === match.params.name).Genre} />
                }} />

              <Route path='/directors/:name'
                render={({ match }) => {
                  if (!movies) return <div className='main-view' />;
                  return <DirectorView director={movies.find(m => m.Director.Name === match.params.name).Director} />
                }} />

            </Row>
          </Container>
        </React.Fragment>
      </Router>
    );
  }
}
