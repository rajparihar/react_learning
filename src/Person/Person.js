import React from 'react';

const Person=(props)=>{
    return <h2 onClick={props.click}>I am {props.name} . i am {props.age} years old. </h2>
}

export default Person;