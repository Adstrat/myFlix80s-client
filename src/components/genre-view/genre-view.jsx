import React from "react";
//import PropTypes from "prop-types";
import { Card, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import './genre-view.scss'

export function GenreView(props) {

  const { genre } = props;
  if (!genre) return null;

  const history = useHistory();

  return (
    <React.Fragment>
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
    </React.Fragment >
  );
}

