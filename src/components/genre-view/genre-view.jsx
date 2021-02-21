import React from "react";
//import PropTypes from "prop-types";
import { Card, Button, Container } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { MovieCard } from "../movie-card/movie-card";
import './genre-view.scss';

export function GenreView(props) {

  const { genre, movies } = props;
  if (!genre) return null;

  const history = useHistory();

  return (
    <React.Fragment>
      <Container className='my-3 w-50 p-3'>

        <Card className="genre-view">
          <Card.Body>

            <Card.Title>{genre.Name}</Card.Title>

            <Card.Text>
              {genre.Description}
            </Card.Text>

            <div className='center-btn'>
              <Button className='return-button' variant='info' onClick={(e) => history.goBack()} >Back to Movie</Button>
            </div>
          </Card.Body>

        </Card>

        <h2 className=' text-center mb-4 white-words'>
          More {genre.Name} Movies:
        </h2>

        {movies.map(m => {
          if (m.Genre.Name === genre.Name) {
            return (
              <MovieCard key={m._id} movie={m} />
            );
          }
        })}

      </Container>
    </React.Fragment >
  );
}

