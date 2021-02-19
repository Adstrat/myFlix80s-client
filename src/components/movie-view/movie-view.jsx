import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';

import './movie-view.scss'

export class MovieView extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { movie, onClick } = this.props;
    if (!movie) return null;
    return (
      <React.Fragment>
        <Card className="movie-view">
          <Card.Img className="movie-poster" variant="top" src={movie.ImagePath} />

          <Card.Body>
            <Card.Title className="movie-title">
              {movie.Title}</Card.Title>
            <Card.Text className="movie-released">
              {movie.Released}</Card.Text>
            <Card.Text className="movie-description">
              {movie.Description}</Card.Text>
            <Card.Text className="movie-genre">
              Genre: {<Link to={`/genres/${movie.Genre.Name}`}>
                <Button variant="link">{movie.Genre.Name}</Button></Link>}</Card.Text>
            <Card.Text className="movie-director">
              Director:  {<Link to={`/directors/${movie.Director.Name}`}>
                <Button variant="link">{movie.Director.Name}</Button></Link>}</Card.Text>
            <Card.Text className="movie-actors">
              Actors: {movie.Actors}</Card.Text>

            <Link to={`/`}>
              <div className='center-btn'>
                <Button className='return-button' variant='info'>Return to Movie List</Button>
              </div>
            </Link>

          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    ImagePath: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired
    }).isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string.isRequired,
      Death: PropTypes.string
    }).isRequired,
    Actors: PropTypes.array.isRequired,
    Released: PropTypes.string.isRequired,
    Featured: PropTypes.bool
  }).isRequired,
  onClick: PropTypes.func.isRequired
};