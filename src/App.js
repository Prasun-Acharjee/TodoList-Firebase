import React, { Component } from 'react';
import ToDoInput from './ToDoInput.js';
import ToDoList from './ToDoList.js';
import firebase from "./firebase";
class App extends Component {
  constructor(props){
    super(props);
    this.state={elements:[],item:"",key:[]};
}
componentDidMount()
{
  const wordRef=firebase.database().ref('elements');
  wordRef.on('value',(snapshot)=>{
    let elements=snapshot.val();
    let newState = [];
    let idState=[];
    console.log(elements);
    console.log(item);
    for (var item in elements) {
     console.log(item);
        //console.log(elements);
      newState.push(elements[item]);
      idState.push(item);
      
    }
    /*for (var key in elements) {
      if (elements.hasOwnProperty(key)) {
          console.log(key + " -> " + elements[key]);
      }
  }*/
      this.setState({elements:newState,key:idState});
  });
}

handlechange=(event)=>
{
  this.setState({item:event.target.value});
  
}
addtolist=()=>
{
  const itemref=firebase.database().ref('elements');
  itemref.push(this.state.item);
  this.state.item="";
}

removing=(index)=>
{
 
  console.log(index);
  const itemRef = firebase.database().ref(`elements/${index}`);
  itemRef.remove();

}
  render() {
    return (
      <div>
      <ToDoInput value={this.state.item} change={this.handlechange} click={this.addtolist}/>
      <ToDoList name={this.state.elements} remove={this.removing} id={this.state.key}/>
      </div>
    );
  }
}

export default App;
