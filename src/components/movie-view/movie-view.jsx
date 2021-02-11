import React from "react";
import PropTypes from "prop-types";

export class MovieView extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  refreshPage() {
    window.location.reload(false);
  }
  render() {
    const { movie } = this.props;
    if (!movie) return null;
    return (
      <div className="movie-view">
        <img className="movie-poster" src={movie.ImagePath} />
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.Title}</span>
        </div>
        <div className="movie-description">
          <span className="label">Description: </span>
          <span className="value">{movie.Description}</span>
        </div>

        <div className="movie-genre">
          <span className="label">Genre: </span>
          <span className="value">{movie.Genre.Name}</span>
        </div>
        <div className="movie-director">
          <span className="label">Director: </span>
          <span className="value">{movie.Director.Name}</span>
        </div>
        <div className="movie-actors">
          <span className="label">Actors: </span>
          <span className="value">{movie.Actors}</span>
        </div>
        <div className="movie-released">
          <span className="label">Released: </span>
          <span className="value">{movie.Released}</span>
        </div>
        <button onClick={this.refreshPage}>
          Back to Main Page
        </button>
      </div >
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
    Released: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
}