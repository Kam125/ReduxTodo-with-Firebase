import React, { Component } from 'react'
import {addTask} from '../../actions/taskActions'
import {connect} from 'react-redux'

export class AddTask extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             task: "",
             checked: false
        }
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addTask(this.state)
        document.getElementById('addTaskForm').reset()
        console.log(this.state);
    }
    


    render() {
        return (
            <>

                <form id = "addTaskForm" className = "container" autoComplete = "off" style = {{marginTop: "30px"}} onSubmit = {this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="task" className="form-label">Add a Task</label>
                        <input type="text" className="form-control" id="task" onChange = {this.handleChange} />
                    </div>
                    
                    
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTask: task=>dispatch(addTask(task))
    }
}

export default connect(null, mapDispatchToProps)(AddTask)
