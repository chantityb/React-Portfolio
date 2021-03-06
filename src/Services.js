import React, { Component } from 'react';
import './Services.css';




class Services extends Component {
	
	render(){
		return (

			<section className="content-section bg-primary text-white text-center" id="services">
      			<div className="container">
        			<div className="content-section-heading">
						<h3 className="text-secondary mb-0">Services</h3>
			          	<h2 className="mb-5">What We Offer</h2>
			        </div>
			    <div className="row">
			    <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
			        <span className="service-icon rounded-circle mx-auto mb-3">
			        	<i className="icon-screen-smartphone"></i>
			        </span>
			        <h4>
			          	<strong>Responsive</strong>
			        </h4>
			        <p className="text-faded mb-0">swag coloring book mustache</p>
			    </div>
			    <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
			        <span className="service-icon rounded-circle mx-auto mb-3">
			        	<i className="icon-pencil"></i>
			        </span>
			        <h4>
			            <strong>Redesigned</strong>
			        </h4>
			        <p className="text-faded mb-0">Yuccie woke PBR&B</p>
			    </div>
			    <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
			        <span className="service-icon rounded-circle mx-auto mb-3">
			            <i className="icon-like"></i>
			        </span>
			        <h4>
			            <strong>Favorited</strong>
			        </h4>
			       	<p className="text-faded mb-0">Stumptown vinyl skateblarb
			        </p>
			    </div>
			    <div className="col-lg-3 col-md-6">
			        <span className="service-icon rounded-circle mx-auto mb-3">
			        	<i className="icon-mustache"></i>
			        </span>
			        <h4>
			            <strong>Question</strong>
			        </h4>
			            <p className="text-faded mb-0">Fashion axe shaman pitchfork</p>
			    	</div>
			   	</div>
			  </div>
			</section>
			
		)
	}
};


export default Services;