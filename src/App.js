import React from 'react';
import axios from 'axios';

import './App.css';

class Listing extends React.Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
  }

  render() {
    return (
        <ul className= "user-list">
          { this.state.persons.map(person => <li>
              <h2>{person.title}</h2>
              <span>{person.body.slice(0, 100)}</span>
          </li>)}
        </ul>
    )
  }
}

export default Listing;
