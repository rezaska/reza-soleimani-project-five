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
      movies: []
    }
  }

  componentDidMount() {

    Axios({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie',
      responseType: 'json',
      params: {
        api_key: 'cd7b67374269e15777a55aee45332dab',
        query: ''
      }
    }).then((apiData) => {
      // console.log(apiData.data.results);

      this.setState({
        movies: apiData.data.results,
      })
    })
  }

  render() {

    return (
      <div>
        <Header />
        <SearchBar />
        <Results movies={this.state.movies} />
      </div>
    )
  }
}

export default App;