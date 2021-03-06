import React, { Component } from 'react'

export class Check extends Component {
    render() {
        let {checked, onClick} = this.props
        if (checked === true) {
            return(
                <span 
                    className="material-icons text-success"
                    style = {{cursor: "pointer"}}
                    onClick = {onClick}
                    >
                    check_circle_outline
                </span>
            )
        }else{
            return(
                <span 
                    className="material-icons text-muted"
                    style = {{cursor: "pointer"}}
                    onClick = {onClick}
                    >
                    check_circle_outline
                </span>
            )
        }
    }
}

export default Check
