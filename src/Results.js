import { Component } from 'react';
import PlaceHolder from './no_image_available.jpeg';

class Results extends Component {

    render() {

        // return the search results
        return (
            <div className='results'>
                {
                    this.props.movies.map((movie, index) => {
                        // return all information we have for each movie
                        return (
                            <div className='card' key={index}>
                                <h2>{movie.title}</h2>
                                <p>User Rating: {movie.vote_average}</p>
                                {
                                    movie.poster_path 
                                    ? <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                                    : <img src={PlaceHolder} alt=""/>
                                }
                                <p className='overviewText'>{movie.overview}</p>
                                <button className='watchListButton'>Add to watchlist</button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Results;