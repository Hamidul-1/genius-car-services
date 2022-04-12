import React from 'react';

const Service = ({service}) => {
    const {id, name , price, description, img} = service;
    return (
        <div>
            <img src={img} alt="" />
            <h2>This is Service: {name}</h2>
        </div>
    );
};

export default Service;