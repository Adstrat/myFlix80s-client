import React from "react";
import PropTypes from "prop-types";
import { Card, Button, Container, Row } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { MovieCard } from "../movie-card/movie-card";
import './genre-view.scss';

export function GenreView(props) {

  const { genre, movies } = props;
  if (!genre) return null;

  const history = useHistory();

  return (
    <React.Fragment>
      <Container className='genre-container'>

        <Card className="genre-view">
          <Card.Body>

            <Card.Title className='scifi-title'>{genre.Name}</Card.Title>

            <Card.Text>
              {genre.Description}
            </Card.Text>

            <div className='center-btn'>
              <Button className='return-button' variant='info' onClick={() => history.goBack()} >Back to Movie</Button>
            </div>
          </Card.Body>
        </Card >
      </Container >

      <Container className='my-3'>

        <h5 className=' text-center mb-4 white-words'>
          {genre.Name} Movies:
        </h5>

        <Row className="justify-content-center">

          {movies.map(m => {
            if (m.Genre.Name === genre.Name) {
              return (
                <MovieCard key={m._id} movie={m} />
              );
            }
          })}

        </Row>
      </Container>
    </React.Fragment >
  );
}


GenreView.propTypes = {
  Movie: PropTypes.shape({
    Genre: {
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired
    }
  })
};