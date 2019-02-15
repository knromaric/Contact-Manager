import React, { Component } from "react";
import { Consumer } from "../../context";
import uuid from 'uuid';
import TextInputGroup from './../TextInputGroup/TextInputGroup';

class AddContactForm extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  onTextChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const {name, email, phone} = this.state;
    const newContact = {
      id: uuid(),
      name,
      email, 
      phone
    };
    
    dispatch({type: 'ADD_CONTACT', payload:newContact})
    
    this.setState({
      name:'', 
      email:'', 
      phone:''
    })
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3 ">
              <div className="card-header">AddContact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup 
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value = {name}
                    onChange = {this.onTextChange}        
                  />
                  <TextInputGroup 
                    label="Email"
                    name="email"
                    placeholder="Enter Email"
                    value = {email}
                    onChange = {this.onTextChange}        
                  />
                  <TextInputGroup 
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone Number"
                    value = {phone}
                    onChange = {this.onTextChange}        
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContactForm;
