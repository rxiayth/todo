import React, { Component } from 'react';

// auto foucs

class TaskInput extends React.Component {  


    constructor(props) {
        super(props);
        this.addTask = this.addTask.bind(this);
        
    }
    
    componentDidMount(){
       this.refs.newTask.focus(); 
    }

    addTask(e){
        this.props.addTask( this.refs.newTask.value );
        this.refs.newTask.value = '';
        e.preventDefault();
    }

    render(){ 
        
        return (
            <div className="taskInput">
                <h2>Add Task</h2>
                <form onSubmit={this.addTask}>
                    <input type="text" ref="newTask" autofocus/>
                    <input type="submit" />
                </form>
            </div>

        );
    }
}


export default TaskInput;