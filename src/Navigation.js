import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div>
      	<nav>
      		<h2 className="logo">React Portfolio</h2>

      		<ul>
      			<li><a href="#">Home</a></li>
      			<li><a href="#">About</a></li>
      			<li><a href="#">Service</a></li>
      			<li><a href="#">Portfolio</a></li>
				<li><a href="#">Contact</a></li>
			</ul>

      	</nav>
       
      </div>
    );
  }
}

export default Navigation;