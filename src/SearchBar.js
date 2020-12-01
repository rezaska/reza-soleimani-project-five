import { Component } from 'react';

class SearchBar extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleInputChange = (e) => {
        this.setState({
            movies: e.target.value
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