import React, { Component } from 'react';
import './App.css';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contact 
            name="Roma Nze" 
            email="rnze@gmail.com" 
            phone="777-777-777" />
          <Contact 
            name="Nina Koua" 
            email="ninkoua@gmail.com" 
            phone="333-333-333" />
        </div>
      </div>
    );
  }
}

export default App;
