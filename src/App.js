import Axios from 'axios';
import { Component } from 'react';
import './App.css';
import Header from './Header.js';
import SearchBar from './SearchBar.js';
import Results from './Results.js';

class App extends Component {

  constructor() {
    super();
 
    this.state = {
      movies: [],
      searchQuery: ''
    }
  }

  // componentDidUpdate is called whenever a component props or states has changed.
  componentDidUpdate(prevProps, prevState) {
    // if searchQuery is different from what before then we clear the movies and fetch a new search.
    if(this.state.searchQuery !== prevState.searchQuery) {
      this.setState({
        movies: []
      })
      this.fetchMovies()
    }
  }

  fetchMovies() {
    if(this.state.searchQuery) {
      Axios({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie',
        responseType: 'json',
        params: {
          api_key: 'cd7b67374269e15777a55aee45332dab',
          query: this.state.searchQuery
        }
      }).then((apiData) => {
        // console.log(apiData.data.results);

        this.setState({
          movies: apiData.data.results,
        })
      })
    }
  }

  setSearchQuery = (query) => {
    this.setState({
      searchQuery: query
    })
  }

  render() {

    return (
      <div>
        <Header />
        <SearchBar searchForMovie={this.setSearchQuery}/>
        <Results movies={this.state.movies} />
      </div>
    )
  }
}

export default App;