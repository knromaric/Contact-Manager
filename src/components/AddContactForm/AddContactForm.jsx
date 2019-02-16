import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "./../TextInputGroup/TextInputGroup";
import axios from 'axios';

class AddContactForm extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  onTextChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    if(!name){
      this.setState({errors: {name:'Name is required'}});
      return;
    }

    if(!email){
      this.setState({errors: {email:'Email is required'}});
      return;

    }

    if(!phone){
      this.setState({errors: {phone:'Phone is required'}});
      return;

    }

    const newContact = {
      name,
      email,
      phone
    };

    const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact);
    dispatch({ type: "ADD_CONTACT", payload: res.data });

    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    this.props.history.push('/');
  };

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3 ">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onTextChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={this.onTextChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone Number"
                    value={phone}
                    onChange={this.onTextChange}
                    error={errors.phone}
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
