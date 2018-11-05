import React, { Component } from 'react';
import './Header.css';


class Header extends Component {

	render(){
		return(

		    <header className="masthead d-flex">
		      <div className="container text-center my-auto">
		        <h1 className="mb-1">{this.props.title}</h1>
		        <h3 className="mb-5">
		          <em>Built using React and Bootstrap</em>
		        </h3>
		        <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">{this.props.button}</a>
		      </div>
		      <div className="overlay"></div>
		    </header>
		)
	}
};

export default Header;