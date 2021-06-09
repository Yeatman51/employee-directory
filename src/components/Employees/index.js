import React from 'react';
import Person from "../../../src/components/Person";
import API from "../../../src/utlis/API";

function Employees(props) {
    return (
    <div>
       {filteredEmployees.map(props =>{
        return (
          <div>
            key={props.id} 
            firstName={Person.name.first} 
            LastName={props.name.last} 
            image={props.image}
            
          </div>
        );
      })}
    </div>
    );
}        
export default Employees;