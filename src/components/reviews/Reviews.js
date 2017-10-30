import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    let filterReviews = this.props.store.getState().reviews.filter((review) => {
      return review.restaurantId === this.props.restaurantId
    })

    let reviews = filterReviews.map((review)=>{
      return <Review key={review.id} review={review} store={this.props.store} />
    })
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
