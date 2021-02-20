import React from "react";
import PropTypes from "prop-types";
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';

export class MovieView extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { movie, onClick } = this.props;
    if (!movie) return null;
    return (
      <Card className="movie-view">
        <Card.Img className="movie-poster" variant="top" src={movie.ImagePath} />
        <Card.Body>
          <Card.Title className="movie-title">
            {movie.Title}</Card.Title>
          <Card.Text className="movie-description">
            {movie.Description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem className="movie-genre">
            Genre: {movie.Genre.Name}</ListGroupItem>
          <ListGroupItem className="movie-director">
            Director: {movie.Director.Name}</ListGroupItem>
          <ListGroupItem className="movie-actors">
            Actors: {movie.Actors}</ListGroupItem>
          <ListGroupItem className="movie-released">
            Released: {movie.Released}</ListGroupItem>
        </ListGroup>
        <Button className='return-button' variant='info' onClick={() =>
          onClick(movie)}>Return to Movie List</Button>
      </Card>

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