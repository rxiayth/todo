import React, {Component} from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

class AppBody extends React.Component{
	constructor(props) {
		super(props);
 	 	this.state = {
 	 		list: []
 	 		// list_item: {'11111111': 'task1'},
 	 		// list_ref: ['11111111']
	 	 } 
	 	 this.addTask = this.addTask.bind(this);
	 	 this.removeTask = this.removeTask.bind(this);
	}

    addTask(taskName) { 
    	// let c = Date.now();
        this.state.list.push({'task': taskName});
        this.setState({list: this.state.list});
        // c+=1; 

        

    }

    removeTask(taskToRemove) {
    	let newList = this.state.list.filter( (task) => {
    		if (task !== taskToRemove.task) {
    			return task;
    		} else {
    			console.warn(`removed task: ${task.task}`);
    		}
    	});
    	this.setState({list: newList});
    }



	render() { 
		return (
			<div className="body">
				<TaskInput 
					list={this.state.list}
					addTask={this.addTask}
				/>
				<TaskList 
					list={this.state.list}
					removeTask={this.removeTask}
				/>
			</div>
		);
	}
}


export default AppBody;