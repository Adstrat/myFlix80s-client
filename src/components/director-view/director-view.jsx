import React from "react";
//import PropTypes from "prop-types";
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './director-view.scss'

export class DirectorView extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { director } = this.props;
    if (!director) return null;

    return (
      <React.Fragment>
        <Card className="director-view">

          <Card.Body>
            <Card.Title>{director.Name}</Card.Title>

            <Card.Subtitle className="mb-2 text-muted">{director.Birth}-{director.Death}</Card.Subtitle>
            <Card.Text>
              {director.Bio}
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

