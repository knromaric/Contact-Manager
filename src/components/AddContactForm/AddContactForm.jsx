import React, { Component } from "react";

class AddContactForm extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  onTextChange = e => this.setState({[e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3 ">
        <div className="card-header">AddContact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
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
  }
}

export default AddContactForm;
