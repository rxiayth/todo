import React, { Component } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

class AppBody extends React.Component{

	constructor(props) {
		super(props);
 	 	this.state = {
 	 		list: []
	 	 } 
	 	 this.addTask = this.addTask.bind(this);
	 	 this.removeTask = this.removeTask.bind(this);
	 	 this.database = window.firebase.database();
	 	 this.loadTasks = this.loadTasks.bind(this);

	 	 this.fetchTasks();

	}


	guid() {
	  function s4() {
	    return Math.floor((1 + Math.random()) * 0x10000)
	      .toString(16)
	      .substring(1);
	  }
	  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	}


	fetchTasks() {
		this.database.ref('/tasks/').on('value', this.loadTasks );
	}

	loadTasks(snapshot) {
		let newList =  this.toArrayFromObject( snapshot.val() )
		this.state.list = newList;
	 	this.setState({list: this.state.list });
		
	}

	toArrayFromObject(obj) {
		var arrayObj = [];
		Object.keys(obj).map( (taskKey)=>{
			arrayObj.push( obj[taskKey] )
		})
		return arrayObj;
	}


    addTask(taskName) { 
    	let uuid = this.guid();
    	let task = {
    		name: taskName,
    		uuid: uuid
    	}
    	
        this.state.list.push( task );
        this.setState({list: this.state.list});
        this.database.ref( 'tasks/' + task.uuid ).set(task);
        

    }

    removeTask(taskToRemove) {
    	let newList = this.state.list.filter( (task) => {
    		if (task !== taskToRemove.task) {
    			return task;
    		} else {
    			this.database.ref( 'tasks/' + task.uuid ).remove()
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