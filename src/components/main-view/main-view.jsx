import React from "react";
import axios from "axios";

import { RegistrationView } from "../registration-view/registration-view";
import { LoginView } from "../login-view/login-view";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: null,
      selectedMovie: null,
      user: null
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
  onMovieClick(movie) {
    this.setState({
      selectedMovie: movie
    });
  }
  onLoggedIn(user) {
    this.setState({
      user
    });
  }

  onReturnClick() {
    this.setState({
      selectedMovie: null
    });
  }

  render() {
    const { movies, selectedMovie, user } = this.state;
    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
    if (!movies) return <div className="main-view" />;
    return (

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
    );
  }
}