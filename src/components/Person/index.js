import React from 'react';

export const Person = ({ firstName, lastName, image }) => {
    return (
                <div className="coin">
                    <h1>{firstName}</h1>
                    <h1>{lastName}</h1>
                    <img src={image} alt={"LastName"} />
                </div>
    );
};

export default Person;