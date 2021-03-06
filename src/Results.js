import { Component } from 'react';
import PlaceHolder from './no_image_available.jpeg';
import firebase from './firebase.js';

class Results extends Component {

  constructor() {
    super();
    this.state = {
      movies: {},
    };
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();
    dbRef.once('value', (data) => {
      const firebaseDataObj = data.val();

      const movieObject = {};
      
      for (let movieId in firebaseDataObj) {
        movieObject[movieId] = true
      }

      this.setState({
        movies: {
          ...movieObject
        }
      })
    })
  }

  changeTitle = (id) => {
    const dbRef = firebase.database().ref();
    dbRef.update({
      [id]: true
    });

    this.setState({
      movies: {
        ...this.state.movies,
        [id]: true
      }
    })
  };

  render() {

    // return the search results
    return (
      <div className='results'>
        {
          this.props.movies.map((movie, index) => {
            // return all information we have for each movie
            return (
              <div className='card wrapper' key={index}>
                <h2>{movie.title}</h2>
                <p>User Rating: {movie.vote_average}</p>
                {
                  movie.poster_path
                    ? <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                    : <img src={PlaceHolder} alt="Not available!" />
                }
                <p className='overviewText'>{movie.overview}</p>
                <button
                  className="watchListButton"
                  onClick={() => this.changeTitle(movie.id)}
                >
                  {this.state.movies[movie.id] ? "Added" : "Add to watchlist"}
                </button>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Results;