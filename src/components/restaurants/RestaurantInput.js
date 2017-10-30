import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props){
    super(props)

    this.state = {
      text: ''
    }
  }

  handleTextChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: {
        text: this.state.text
      }
    })

    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleTextChange} type="text" value={this.state.text}/>
          <button type="submit">Add Restaurant</button>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
