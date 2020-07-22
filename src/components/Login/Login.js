import React, { Component } from 'react'
import {Link} from "react-router-dom";

class Login extends Component {
    constructor () {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }


    render() {
        return (
            <div>
                <h2 className="text-center mt-4">LOGIN</h2>
                <div className="container rounded p-3 mt-2" style={{width: "350px", border: "1px solid #ced4da"}}>                              
                <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="text-center">                    
                        <Link onClick={this.handleSubmit} to="/" className="btn btn-primary">Submit</Link>
                    </div>                   
                </div>
            </div>
        )
    }
}

export default Login

