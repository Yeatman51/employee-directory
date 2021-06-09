import React from 'react';

export const Person = ({ firstName, LastName, image }) => {
    return (
                <div className="coin">
                    <h1>{firstName}</h1>
                    <h1>{LastName}</h1>
                    <img src={image} alt={"LastName"} />
                </div>
    );
};

export default Person;