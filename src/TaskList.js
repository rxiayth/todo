import React, {Component} from 'react';

class TaskList extends React.Component {
 	constructor(props) {
        super(props);
        this.removeTask = this.removeTask.bind(this);
        this.sortByDoc = this.sortByDoc.bind(this);
 	}

    removeTask(task) {
        return () => { this.props.removeTask( {task} ) }
    }

    sortByDoc(taskList) {
        return taskList.sort( (a,b)=>{ return a.doc - b.doc } )
    }



    render(){
   		return(
   			<div className="list" >
   				<h2>Tasks</h2>
   				{this.sortByDoc( this.props.list).map( (task) => {
   					return (
	   					<li key={task.uuid}> 
	   						{task.name}
	   						<button onClick={this.removeTask(task)} >Remove Task</button>

	   					</li>
   						
					)
   				})}

	   			
   			</div>
   		)
    	
    }
	

	

}

export default TaskList;