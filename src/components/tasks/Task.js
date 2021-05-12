import moment from 'moment';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { removeTask, toggleChecked } from '../../actions/taskActions';
import Check from './Check';
class Task extends Component {

    handleRemove = (task) =>{
        this.props.removeTask(task)
    }
    handleCheck = (task) =>{
        this.props.toggleChecked(task)
    }
    
    render(){
        let {task} = this.props
        return (
            <>
                <tr>
                    <th scope="row">{task.task}</th>
                    <td>{moment(task.data).format()}</td>
                    <td><Check onClick = {() => this.handleCheck(task)} checked = {task.checked}/></td>
                    <td><span className="material-icons text-danger" style={{ cursor: 'pointer' }} onClick = {() => this.handleRemove(task)}>delete</span></td>
                </tr>
            </>
        );
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        removeTask: task => dispatch(removeTask(task)),
        toggleChecked: task =>dispatch(toggleChecked(task))
    }
}

export default connect(null,mapDispatchToProps)(Task);