import { Component } from 'react';

class Results extends Component {

    render() {

        // console.log(this.props.movies);

        return (
            <div className='results'>
                {
                    this.props.movies.map((movie, index) => {
                        return (
                            <div className='card' key={index}>
                                <h2>{movie.title}</h2>
                                <p>User Rating: {movie.vote_average}</p>
                                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                                <p>{movie.overview}</p>
                                <button>Add to watchlist</button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Results;