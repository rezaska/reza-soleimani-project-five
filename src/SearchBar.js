import { Component } from 'react';

class SearchBar extends Component {

    constructor() {
        super();

        this.state = {
            movieName: ''
        }
    }

    // create the preventDefault function to avoid reloading the screen on the event of submit
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.searchForMovie(this.state.movieName);
    }

    // create a function that can recieve the value of the user's input
    handleInputChange = (e) => {
        this.setState({
            movieName: e.target.value
        })
    }

    render() {
        return (
            <div className='searchBar'>
                <form onSubmit={this.handleSubmit} className='movieSearchForm searchBarWrapper'>
                    <input type='search' placeholder={'Your Next Movie'} id='search' onChange={this.handleInputChange}/>
                    <button>Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBar;