import React from 'react';
import API from "../../../src/utlis/API";

function Employees(props) {
    return (
    <div>
        {props.users.map(result => (
        <ul>
            <li>{result.name.first}</li>
            <li>{result.name.last}</li>
            
        </ul>
        ))}
    </div>
    );
}        
export default Employees;