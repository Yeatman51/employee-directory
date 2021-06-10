import React from 'react';

function Search(props) {
    return (
    <div>
        <form>
            <input 
            value={props.search} 
            onChange={props.handleInputChange} 
            type="text" 
            placeholder="Search..">
            </input>
            
        </form>
    
        <button className='btn btn-primary' type='submit' onClick={props.handleFormSubmit}>
            Search
        </button>
    </div>
    );
}        
export default Search;