
import cuid from 'cuid';
export const cuidFn = cuid;

let id = 0;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {
  switch(action.type){
    case 'ADD_RESTAURANT':
      id++
      const restaurant = {...action.restaurant, id, comments: []}
      return {restaurants: state.restaurants.concat(restaurant)}
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      return {restaurants}
    case 'ADD_REVIEW':
      return {...state, reviews: [...state.reviews, {id: cuid(),restaurantId: action.restaurantId, text: action.text}]}
    case 'DELETE_REVIEW':
      return {...state, reviews: state.reviews.filter(review => review.id !== action.id)}
    default:
      return state;
  }
}
