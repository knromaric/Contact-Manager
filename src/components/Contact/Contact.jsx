import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";


class Contact extends Component {
  state = {
    showContactDetails: false
  };

  onDeleteContact = (id, dispatch) => {
    dispatch({type: 'DELETE_CONTACT', payload: id});
  };

  render() {
    const { name, email, phone,id} = this.props.contact;
    const { showContactDetails } = this.state;


    return (
      <Consumer>
        {value => {
          const {dispatch} = value;
          return (
            <div className="card card-body mb-3 pointer">
            <h4>
              {name}{" "}
              <i onClick={this.onShowContactDetails} 
                className="fas fa-sort-down"
                style={{cursor: "pointer"}} />
              <i className="fas fa-times" 
                onClick={this.onDeleteContact.bind(this, id, dispatch)}
                style={{cursor:'pointer', float:'right', color:'#DC3545'}}></i>
            </h4>
            {showContactDetails ? (
              <ul className="list-group">
                <li className="list-group-item">Email: {email}</li>
                <li className="list-group-item">Phone: {phone}</li>
              </ul>
            ) : null}
          </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
