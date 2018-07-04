import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  
  state={
    person:[
      {name:"Mike",age:"28"},
      {name:"Harvey",age:"30"}
    ] 
  }

  changeNameHandler=(name,age)=>{
    this.setState({
      person:[
        {name:name,age:age},
        {name:"Harvey",age:"30"}
      ]
    })
  }


  

  render() {
    return (
      <div className="App">
        <button onClick={this.changeNameHandler.bind(this,'raj','24')}>Click Me!</button>
        <Person click={this.changeNameHandler} age={this.state.person[0].age} name={this.state.person[0].name} />
        <Person/>
        <Person /> 
      </div>
    );
  }
}

export default App;
