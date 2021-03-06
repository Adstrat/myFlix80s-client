import React from "react";
import PropTypes from "prop-types";
import { Card, Button, Container, Row } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { MovieCard } from "../movie-card/movie-card";
import './director-view.scss'

export function DirectorView(props) {

  const { director, movies } = props;
  if (!director) return null;

  const history = useHistory();

  return (
    <React.Fragment>
      <Container className='director-container'>

        <Card className="director-view">
          <Card.Body>

            <Card.Title className='director-title'>{director.Name}</Card.Title>

            <Card.Subtitle className="mb-2 text-muted">{director.Birth}-{director.Death}</Card.Subtitle>

            <Card.Text>
              {director.Bio}
            </Card.Text>

            <div className='center-btn'>
              <Button className='return-button' variant='info' onClick={() => history.goBack()} >Back to Movie</Button>
            </div>

          </Card.Body>
        </Card>
      </Container>

      <Container className='my-3'>

        <h5 className=' text-center mb-4 white-words'>
          Movies by {director.Name}:
        </h5>

        <Row className="justify-content-center">

          {movies.map(m => {
            if (m.Director.Name === director.Name) {
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


DirectorView.propTypes = {
  Movie: PropTypes.shape({
    Director: {
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string.isRequired,
      Death: PropTypes.string
    }
  })
};


