import Axios from 'axios';
import { Component } from 'react';
import './App.css';
import Header from './Header.js';

class App extends Component {

  constructor() {
    super();
    //initialize state to keep track of the data that is coming back from the API
    this.state = {
      title: '',
      image: 'https://image.tmdb.org/t/p/original/{TitleImage}',
      rate: '',
      overview: '',
      imdbLink: 'https://www.imdb.com/title/{TitleImdbId}'
    }
  }

  componentDidMount() {
    //make a request to the API once the component has been mounted on the DOM and take the returned data and put it on the page
    Axios({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie?api_key=cd7b67374269e15777a55aee45332dab&query={}',
      // url: 'https://api.themoviedb.org/3/tv/{tvshowTitle}?api_key=cd7b67374269e15777a55aee45332dab',
      responseType: 'json',
      params: {
        key: 'cd7b67374269e15777a55aee45332dab',
        q: this.state.title
      }
    }).then((apiData) => {
      console.log(apiData.data.results);

      this.setState({
        title: apiData.data.results
      })
    })
  }

  render() {
    return (
      <div className='App'>
          <Header />
      </div>
    )
  }
}

export default App;
