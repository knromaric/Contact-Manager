import React, { Component } from "react";
import { Consumer } from "../../context";
import uuid from 'uuid';
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
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Name"
                      value={name}
                      className="form-control form-control-lg"
                      onChange={this.onTextChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter Email"
                      value={email}
                      className="form-control form-control-lg"
                      onChange={this.onTextChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Enter phone number"
                      value={phone}
                      className="form-control form-control-lg"
                      onChange={this.onTextChange}
                    />
                  </div>
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
