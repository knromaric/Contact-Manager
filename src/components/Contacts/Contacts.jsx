import React, { Component } from "react";
import Contact from "./../Contact/Contact";
import { contactList } from "./contactList";

class Contacts extends Component {
  state = {
    contacts: contactList
  };

  handleDeleteContact = contactId => {
    const contacts = this.state.contacts.filter(
      contact => contact.id !== contactId
    );
    this.setState({ contacts });
  };

  render() {
    const { contacts } = this.state;

    return contacts.map(contact => (
      <Contact
        key={contact.id}
        contact={contact}
        onDeleteContact={this.handleDeleteContact}
      />
    ));
  }
}

export default Contacts;
