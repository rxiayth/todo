import React, { Component } from 'react';

class Task extends React.Component {
	constructor(props) {
 	 	super(props);
    	this.removeTask = this.removeTask.bind(this);
 	}

 	removeTask(task){
    	return ()=>{ this.props.removeTask({task}) }
  	}

	render(){
		return(
			<div className="task">
				<li>{task.task} <button onClick={this.removeTask(task)} >Remove Task</button></li>
			</div>

		)
	}

}

export default Task;