import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  state = {
    showContactDetails: false
  };

  onShowContactDetails = () => {
    this.setState({ showContactDetails: !this.state.showContactDetails });
  };

  render() {
    const { name, email, phone, id:contactId } = this.props.contact;
    const {onDeleteContact} = this.props;
    const { showContactDetails } = this.state;

    return (
      <div className="card card-body mb-3 pointer">
        <h4>
          {name}{" "}
          <i onClick={this.onShowContactDetails} 
            className="fas fa-sort-down"
            style={{cursor: "pointer"}} />
          <i className="fas fa-times" 
            onClick={()=>onDeleteContact(contactId)}
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
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
