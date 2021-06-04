// import React from 'react';
// import axios from "axios";

// const randomUser = "https://randomuser.me/api/";

import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://randomuser.me/api/`)
      .then(res => {
        const persons = data.results;
        this.setState({ persons });
      })
  }

  render() {
    return (
      // <ul>
      //   { this.state.persons.map(person => <li>{person.name}</li>)}
      // </ul>
      <ul>
        <li>
          {persons}
        </li>
      </ul>
    )
  }
}