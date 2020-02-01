import React , { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  render () {
    return (
      <div>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Signup</Link>
      </div>
    )
  }
}