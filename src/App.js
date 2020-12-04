import Axios from 'axios';
import { Component, Fragment } from 'react';
import Header from './Header.js';
import SearchBar from './SearchBar.js';
import Results from './Results.js';
import Footer from './Footer.js';

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

  // set a conditional statement so if there is a text in the search bar, the result comes up.
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

        this.setState({
          movies: apiData.data.results,
        })
      })
    }
  }

  // create a function that put the serach result in query in API.
  setSearchQuery = (query) => {
    this.setState({
      searchQuery: query
    })
  }

  render() {

    return (
      <Fragment>
        <Header />
        <main>
          <SearchBar searchForMovie={this.setSearchQuery}/>
          <Results movies={this.state.movies} />
        </main>
        <Footer />
      </Fragment>
    )
  }
}

export default App;