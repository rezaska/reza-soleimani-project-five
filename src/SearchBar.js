import { Component } from 'react';

class SearchBar extends Component {

    constructor() {
        super();

        this.state = {
            movieName: '',
            searchBarClass: 'searchBar'
        }
    }

    // Create the preventDefault function to avoid reloading the screen on the event of submit.
    // Passing the searched movie to the parent for API's query parameter
    // Move the search bar to the top of the screen.
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.searchForMovie(this.state.movieName);
        this.setState({
            searchBarClass: 'searchBarTop'
        })
    }

    // create a function that can receive the value of the user's input
    handleInputChange = (e) => {
        this.setState({
            movieName: e.target.value
        })
    }

    // the search bar with its functions
    render() {
        return (
            <div className={this.state.searchBarClass}>
                <form onSubmit={this.handleSubmit} className='movieSearchForm'>
                    <input type='search' placeholder={'Your Next Movie'} className='wrapper' id='search' onChange={this.handleInputChange}/>
                    <button className='searchButton'>Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBar;