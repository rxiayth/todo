import React, {Component} from 'react';

class TaskInput extends React.Component {  


    constructor(props) {
        super(props);
        this.addTask = this.addTask.bind(this);
        
    }

    addTask(e){
        this.props.addTask( this.refs.newTask.value );
        e.preventDefault();


    }

    render(){ 
        
        return (
            <div className="taskInput">
                <h2>Add Task</h2>
                <form onSubmit={this.addTask}>
                    <input type="text" ref="newTask"/>
                    <input type="submit" />
                </form>
            </div>

        );
    }
}


export default TaskInput;