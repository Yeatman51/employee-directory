// import React from 'react';
// import axios from "axios";

// const randomUser = "https://randomuser.me/api/";

import React from 'react';
import axios from 'axios';

let API = {
    getRandomEmployees: function() {
        return axios.get("https://randomuser.me/api/?results=100&seed=banana");
    }
};

export default API;

// export default class PersonList extends React.Component {
//   state = {
//     persons: []
//   }
  
//      componentDidMount() {
//       axios.get(`https://jsonplaceholder.typicode.com/users`)
//         .then(res => {
//           const persons = res.data;
//           this.setState({ persons });
//         })
//     }
  
//     render() {
//       return (
//         <ul>
//           { this.state.persons.map(person => <li>{person.name}</li>)}
//         </ul>
//       )
//     }
//   }

//   componentDidMount() {
//     axios.get(`https://randomuser.me/api/`)
//       .then(res => {
//         const persons = data.results;
//         this.setState({ persons });
//       })
//   }

//   render() {
//     return (
//       // <ul>
//       //   { this.state.persons.map(person => <li>{person.name}</li>)}
//       // </ul>
//       <ul>
//         <li>
//           {persons}
//         </li>
//       </ul>
//     )
//   }
// }