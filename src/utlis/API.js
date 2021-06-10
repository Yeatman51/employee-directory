import React from 'react';
import Axios from "axios";



// function API() {
//   const getAPI = () => {
//     Axios.get("https://randomuser.me/api/?results=25").then(
//       (response)=> {
//       console.log(response);
//     }
//   );
// }

// export default API;

// console.log(response);
// console.log(API);
// console.log(getAPI);


// const randomUser = "https://randomuser.me/api/";

const API = {
    getAPI: function() {
        return Axios.get("https://randomuser.me/api/?results=25");
    }
};

export default API;
// console.log(API);


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
// }

