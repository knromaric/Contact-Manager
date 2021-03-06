import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from 'axios';
import {Link} from 'react-router-dom';


class Contact extends Component {
  state = {
    showContactDetails: false
  };

  onDeleteContact = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    dispatch({type:'DELETE_CONTACT', payload: id});  
  };

  onShowContactDetails = ()=>{
    this.setState({showContactDetails: !this.state.showContactDetails})
  }
  
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
              <Link to={`contact/edit/${id}`}>
                <i 
                  className="fas fa-pencil-alt"
                  style={{
                    cursor:'pointer',
                    float: 'right',
                    color:'black',
                    marginRight: '1rem'
                  }}></i>
              </Link>
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
