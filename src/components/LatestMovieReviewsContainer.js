import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {

  constructor(){
    super()
    this.state = {
      reviews: []
    }
  }


  componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(data => this.setState({reviews: data.results}))
  }

  shouldComponentUpdate(nextState){
    return this.state.reviews !== nextState.reviews
  }

  render(){
    return(
      <div className="latest-movie-reviews">
        <h3>Latest Movie Reviews:</h3>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
