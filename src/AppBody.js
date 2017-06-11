import React, { Component } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

class AppBody extends React.Component{

	constructor(props) {
		super(props);
 	 	this.state = {
 	 		taskList: []
	 	 } 
	 	 this.database = window.firebase.database();
	 	 this.loadTasks = this.loadTasks.bind(this);

	 	 this.addTask = this.addTask.bind(this);
	 	 this.removeTask = this.removeTask.bind(this);
	 	 
	 	 this.init();
	}

	init() {
		this.fetchTasks();
	}

	fetchTasks() {
		this.database.ref('/tasks/').on('value', this.loadTasks );
	}

	loadTasks(snapshot) {
		let newTaskList =  this.toArrayFromObject( snapshot.val() )
		this.state.taskList = newTaskList;
	 	this.setState( { list: this.state.taskList } );
		
	}
	
	toArrayFromObject(json) {
		var newTaskList = [];
		Object.keys(json).map( (task) => { newTaskList.push(json[task]) });
		return newTaskList;
	}

	createUUID() {
	   	let s4 = () => { return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);}
	  	return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	}

    addTask(taskName) { 
    	let uuid = this.createUUID();
    	let task = {
    		name: taskName,
    		uuid: uuid,
    		doc: Date.now()
    	}
    	
        this.state.taskList.push( task );
        this.setState( { list: this.state.taskList } );
        this.database.ref( 'tasks/' + task.uuid ).set(task);
        

    }

    removeTask(taskToRemove) {
    	let newTaskList = this.state.taskList.filter( (task) => { 
    		if (task === taskToRemove.task) { this.database.ref( 'tasks/' + task.uuid ).remove() }
    	});
    }

	render() { 
		return (
			<div className="body">
				<TaskInput 
					list={this.state.taskList}
					addTask={this.addTask}
				/>
				<TaskList 
					list={this.state.taskList}
					removeTask={this.removeTask}
				/>
			</div>
		);
	}
}


export default AppBody;