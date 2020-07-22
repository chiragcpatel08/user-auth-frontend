import React, { Component } from 'react'
import {Link} from "react-router-dom";

class Register extends Component {
    
    constructor(){
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            image: ""
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
                <h2 className="text-center mt-4">REGISTER</h2>
                <div className="container rounded p-3 mt-2" style={{width: "350px", border: "1px solid #ced4da"}}>
                    <div className="form-group">
                        <label htmlFor="exampleInputName2">Full Name</label>
                        <input onChange={this.handleChange} type="text" name="name" className="form-control" id="exampleInputName2"/>
                    </div>                              
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail2">Email address</label>
                        <input onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail2"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword2">Password</label>
                        <input onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword2"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputimage2">Image URL</label>
                        <input onChange={this.handleChange} type="text" name="image" className="form-control" id="exampleInputimage2"/>
                    </div>
                    <div className="text-center">                    
                        <Link onClick={this.handleSubmit} to="/" className="btn btn-primary">Submit</Link>
                    </div>                   
                </div>
            </div>            
        )
    }
}

export default Register
