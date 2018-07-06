import React, { Component } from 'react';
import '../App.css';
import Radium from 'radium';


const PersonCard=(props)=>{
    return (
        <div className="box">
            <h2 onClick={props.deleteHandler}  title="click me to delete!">Name: {props.name}</h2>
            <h3 >Age: {props.age}</h3>
            <h3>Email: {props.email} </h3>
           <input type="text" onChange={props.change} value={props.name}/>
        </div>
    );
}


export default Radium(PersonCard);