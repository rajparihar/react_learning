import React, { PureComponent } from 'react';
import Radium from 'radium';
import './App.css';
import Promise from 'bluebird';
import $ from "jquery";


// import Person from './Person/Person'
import PersonCard from './PersonCard/PersonCard';

class App extends PureComponent {
  
  state={
    person:[
      {id:"1",name:"Mike",age:"28",email:"mike@gmail.com"},
      {id:"2",name:"Harvey",age:"30",email:"harvey@gmail.com"},
      {id:"3",name:"Rachel",age:"21",email:"rachel@gmail.com"},
      {id:"4",name:"Max",age:"35",email:"max@gmail.com"}
    ],
    show:false
  }

  changeNameHandler=(name,age)=>{
    this.setState({
      person:[
        {name:name,age:age},
        {name:"Harvey",age:"30"}
      ]
    })
  }

  showRecordshandler=()=>{
    let dowsShow=this.state.show;
    this.setState({show: !dowsShow })
  }

  nameChangehandler=(event,personID)=>{
    //findIndex will return the index of matched person
    const empIndex=this.state.person.findIndex(p=>{return p.id === personID;});
    const emp={
      ...this.state.person[empIndex]  
    }

    emp.name=event.target.value;

    const persons=[...this.state.person];
    persons[empIndex]=emp;
    
    this.setState({
      person:persons
    })
  }

  deleteHandlerHandler= personIndex=>{
    // let allPersonData = this.state.person.slice();
    let allPersonData = [...this.state.person];
    allPersonData.splice(personIndex,1);
    this.setState({person:allPersonData});
  }
  
  //get data from network
  // fetch('https://api.publicapis.org/entries')
  //   .then(response => response.json())
  //     .then(
  //       json => {
  //         data=json;
  //         console.log('data ',data);  
  //       }
  //     )

 


  render() {

    Promise.coroutine(function* () {
      let dataFromNetwork=yield $.get('https://api.publicapis.org/entries');
      console.log('dataFromNetwork ',dataFromNetwork);
    })();

    let btnShowHide={
      backgroundColor:"white",
      font:"inherit",
      border:"1px solid blue",
      padding:"8px",
      cursor:"pointer",
      marginBottom:"20px",
      marginRight:"20px",
      ':hover':{
        backgroundColor: "#a0a6ed"
      }
    };
    
    let  person=null;

    if(this.state.show){
      person=(
      <div>
      {
        this.state.person.map((ele,i)=>{
          return (<PersonCard 
             name={ele.name} 
             age={ele.age}  
             email={ele.email} 
             deleteHandler={()=>this.deleteHandlerHandler(i)}
             key={ele.id}
             change={(event)=>this.nameChangehandler(event,ele.id)}
             />);
        })
      }
      </div>
      );
    }

    return (
      <div className="App">
        <h1> Employees Detail</h1>
        <button style={btnShowHide} onClick={this.showRecordshandler}>Show Employees </button>
        <div className="container">
          {person}
        </div>
      </div>
    );
  }
}

export default Radium(App);


//some useful concepts

//pass fucntion as handler

// <button onClick={this.changeNameHandler.bind(this,'raj','24')}>Click Me!</button>
//         <Person click={this.changeNameHandler} age={this.state.person[0].age} name={this.state.person[0].name} />
//         <Person/>
//        <Person /> 
// <PersonCard  name={this.state.person[0].name} age={this.state.person[0].age}  email={this.state.person[0].email}/>
//         <PersonCard  name={this.state.person[1].name} age={this.state.person[1].age}  email={this.state.person[1].email}/>
//         <PersonCard  name={this.state.person[2].name} age={this.state.person[2].age}  email={this.state.person[1].email}/>
//         <PersonCard  name={this.state.person[3].name} age={this.state.person[3].age}  email={this.state.person[1].email}/>