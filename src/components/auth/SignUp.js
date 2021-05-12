import React, { Component } from 'react'

export class SignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: "",
             password: ""
        }
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
    }
    


    render() {
        return (
            <>

                <form className = "container" autoComplete = "off" style = {{marginTop: "30px"}} onSubmit = {this.handleSubmit}>
                    <legend><h4>Sign Up</h4></legend>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" onChange = {this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" onChange = {this.handleChange}/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">SignUp</button>
                </form>
            </>
        )
    }
}

export default SignUp
