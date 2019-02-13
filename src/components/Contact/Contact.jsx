import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  state = {
    showContactDetails: false
  };

  onShowContactDetails = e => {
    this.setState({ showContactDetails: !this.state.showContactDetails });
  };

  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactDetails } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <i onClick={this.onShowContactDetails} className="fas fa-sort-down" />
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
