import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get('https://ass4singment.herokuapp.com/products')
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.price}</li>)}
      </ul>
    )
  }
}