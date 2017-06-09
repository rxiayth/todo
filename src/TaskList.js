import React, {Component} from 'react';

class TaskList extends React.Component{
 	constructor(props) {
 	 	super(props);
    this.removeTask = this.removeTask.bind(this);

 	}

  removeTask(task){
    return ()=>{ this.props.removeTask({task}) }
  }

    

    render(){
   		return(
   			<div className="list" >
   				<h2>Tasks</h2>
   				{this.props.list.map( (task,index) => {
   					return (
	   					<li key={index}> 
	   						{task.task}
	   						<button onClick={this.removeTask(task)} >Remove Task</button>

	   					</li>
   						
					)
   				})}

	   			
   			</div>
   		)
    	
    }
	

	

}

export default TaskList;