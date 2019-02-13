import React, { Component } from "react";
import Contact from "./../Contact/Contact";
import { contactList } from "./contactList";

class Contacts extends Component {
  state = {
    contacts: contactList
  };

  render() {
    const {contacts} = this.state;

    return contacts.map(contact => (
      <Contact
        key={contact.id}
        contact={contact}
      />
    ));
  }
}

export default Contacts;
