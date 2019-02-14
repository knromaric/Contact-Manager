import React, { Component } from 'react';
import './App.css';
import Contacts from './components/Contacts/Contacts';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddContactForm from './components/AddContactForm/AddContactForm';
import {Provider} from './context';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <AddContactForm />
          <Contacts />
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;
