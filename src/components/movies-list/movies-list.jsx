import React from 'react';
import { connect } from 'react-redux';

import { MovieCard } from '../movie-card/movie-card';
import { Row } from 'react-bootstrap';
import VisibilityFilterInput from '../visibility-filter-input/visibility-filter-input';

import './movies-list.scss'

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  return { visibilityFilter };
};

function MoviesList(props) {
  const { movies, visibilityFilter } = props;
  let filteredMovies = movies;

  if (visibilityFilter !== '') {
    filteredMovies = movies.filter(m => m.Title.includes(visibilityFilter));
  }

  if (!movies) return <div className="main-view" />;

  return <div className="movies-list">
    <h1 className='text-center mb-4'>Welcome to myFlix80s</h1>
    <p className='text-center mb-4'> Browse your favourite films from the 1980s. <br />
      Discover timeless classics.
      And create a list of your favourites.</p>

    < Row className="justify-content-center">
      <div className="col-2"></div>
      <div className="col-6">
        <VisibilityFilterInput visibilityFilter={visibilityFilter} />
      </div>
      <div className="col-2"></div>
      {filteredMovies.map(m => <MovieCard key={m._id} movie={m} />)}
    </Row>
  </div >
}

export default connect(mapStateToProps)(MoviesList);