import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
class ToDoList extends Component{
    render(){
        return(
            <div>
                {
                    this.props.name.map((element,index)=> <ToDoItem key={element.id}
                     remove={this.props.remove} element={element} index={index} id={this.props.id}/>)
                }
                </div>
        );
    }
}
export default ToDoList;