import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from 'react-bootstrap';

import './movie-card.scss'

import { Link } from "react-router-dom";

export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <Card className="movie-card">

        <Link to={`/movies/${movie._id}`}>
          <Card.Img variant="top" className="movie-image" src={movie.ImagePath} />
        </Link>

        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>Released: {movie.Released}</Card.Text>

          <Link to={`/movies/${movie._id}`}>
            <Button variant="info">View</Button>
          </Link>

        </Card.Body>
      </Card>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Released: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired
  }).isRequired,
}