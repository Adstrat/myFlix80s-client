import React from "react";
//import PropTypes from "prop-types";
import { Card, Button } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
import './director-view.scss'

export function DirectorView(props) {


  const { director } = props;
  if (!director) return null;

  const history = useHistory();

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

        <div className='center-btn'>
          <Button className='return-button' variant='info' onClick={(e) => history.goBack()} >Back to Movie</Button>
        </div>

        <Link to={`/`}>
          <div className='center-btn'>
            <Button className='return-button' variant='info'>Return to Main List</Button>
          </div>
        </Link>

      </Card>
    </React.Fragment >
  );
}


