import React from 'react';
import './style.css';

function Card (props) {
    return (
        <div className="img"> 
        <img className="card-img-top" src={props.image} alt={`Our employee ${props.firstname} ${props.lastName}`}></img>
        <div className="card-body">
    <h4 className="card-title">{`${props.firstName} ${props.lastName}`}</h4>
    <p className="card-text">Age:{props.age}</p>
    
    <p className="card-text">Phone:{props.phoneNumber}</p>
    <p className="card-text">Email:{props.email}</p>
    <p className="card-text">SSN:{props.ssn}</p>
        </div>
        </div>
    )
}

export default Card;
