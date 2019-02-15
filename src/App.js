import React, { Component } from 'react';
import './App.css';
import Contacts from './components/Contacts/Contacts';
import Header from './components/Header/Header';
import About from './components/StaticPages/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddContactForm from './components/AddContactForm/AddContactForm';
import {Provider} from './context';
import NotFound from './components/StaticPages/NotFound';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContactForm} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
