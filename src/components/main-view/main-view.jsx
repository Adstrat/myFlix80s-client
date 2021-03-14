import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';

import { setMovies, setUser } from '../../actions/actions';

import MoviesList from '../movies-list/movies-list';

import { RegistrationView } from "../registration-view/registration-view";
import { LoginView } from "../login-view/login-view";
import { MovieView } from "../movie-view/movie-view";
import { GenreView } from "../genre-view/genre-view";
import { DirectorView } from "../director-view/director-view";
import { ProfileView } from "../profile-view/profile-view";
import { UpdateView } from "../update-view/update-view";

import { Container, Row, Navbar, Nav } from 'react-bootstrap';

import './main-view.scss'

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      hasAccount: true
    };
  }

  // Gets movies from API
  getMovies(token) {
    axios.get('https://my-flix80s.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        // Assign the result to the state
        this.props.setMovies(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // Persisted authentication - keeps user logged in
  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.props.setUser(localStorage.getItem('user'));
      this.getMovies(accessToken);
    }
  }

  // Updates user in state on successful login
  onLoggedIn(authData) {
    console.log(authData);
    this.props.setUser(authData.user.Username);
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

  // Handler to navigate from LoginView to RegistrationView 
  handleRegister = () => {
    this.setState({
      hasAccount: false
    });
  }
  //Handler to navigate from RegistrationView to LoginView 
  handleReturnLogin = () => {
    this.setState({
      hasAccount: true
    });
  }

  render() {
    const { hasAccount } = this.state;
    const { movies, user } = this.props;

    // on LoginView, when 'New User Sign Up' is clicked, goes to ReistrationView
    if (!hasAccount) return < RegistrationView handleReturnLogin={this.handleReturnLogin} />;


    // Renders LoginView if no user
    if (!user) return < LoginView onLoggedIn={user => this.onLoggedIn(user)}
      handleRegister={this.handleRegister}
    />;


    if (!movies) return <div className="main-view" />;

    return (
      <Router>
        <React.Fragment>
          <Navbar className="navbar" variant="dark" expand="md">
            <Navbar.Brand href="#home">myFlix80s</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>

                <Nav.Link href='/profile'>Profile</Nav.Link>

                <Nav.Link onClick={() => this.onLogOut()}>LogOut</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Container className='my-3'>
            <Row className="main-view justify-content-md-center">

              <Route exact path="/" render={() => {
                return <MoviesList movies={movies} />
              }
              } />

              <Route path='/movies/:movieId'
                render={({ match }) => <MovieView movie={movies.find(m => m._id === match.params.movieId)} />} />

              <Route path='/genres/:name'
                render={({ match }) => {
                  if (!movies) return <div className='main-view' />;
                  return <GenreView movies={movies} genre={movies.find(m => m.Genre.Name === match.params.name).Genre} />
                }} />

              <Route path='/directors/:name'
                render={({ match }) => {
                  if (!movies) return <div className='main-view' />;
                  return <DirectorView movies={movies} director={movies.find(m => m.Director.Name === match.params.name).Director} />
                }} />

              <Route path='/profile'
                render={() => <ProfileView user={user} movies={movies} />
                } />

              <Route path='/update'
                render={() => <UpdateView />
                } />

            </Row>
          </Container>
        </React.Fragment>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return { movies: state.movies, user: state.user }
}

export default connect(mapStateToProps, { setMovies, setUser })(MainView);