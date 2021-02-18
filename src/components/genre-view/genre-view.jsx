import React from "react";
//import PropTypes from "prop-types";
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './genre-view.scss'

export class GenreView extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { genre } = this.props;
    if (!genre) return null;

    return (
      <React.Fragment>
        <Card className="genre-view">

          <Card.Body>
            <Card.Title>{genre.Name}</Card.Title>


            <Card.Text>
              {genre.Description}
            </Card.Text>

          </Card.Body>

          <Link to={`/`}>
            <div className='center-btn'>
              <Button className='return-button' variant='info'>Return to Movie List</Button>
            </div>
          </Link>

        </Card>
      </React.Fragment >

    );
  }
}

