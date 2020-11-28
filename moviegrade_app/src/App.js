import React, {Component} from "react";
import axios from 'axios';
import Movies from './Movies';
import './App.css';

class App extends Component {
  state = {
    isLoading: true,
    movieList: [],
  };

  componentDidMount(){
    this.getMovies();
  }

  getMovies = async () => {
    const {data : { data : { movies } } } = await axios.get('http://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    console.log('movies', movies)
    this.setState({
      movieList: movies,
      isLoading: false
    })
  }

  render() {
    const { isLoading, movieList } = this.state;
    console.log('movieList', movieList)
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ):(
          <div className="movies">
            {movieList.map(movie => {
              return (
                <Movies 
                  key={movie.id} 
                  id={movie.id} 
                  title={movie.title} 
                  year={movie.year} 
                  summary={movie.summary} 
                  poster={movie.medium_cover_image} 
                  genres={movie.genres}
                />
              )
            })}
          </div>
        )}
      </section>
    )
  }
}

export default App;
