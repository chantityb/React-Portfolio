import React, {Component} from 'react';
import './Callout.css';


class Callout extends Component {
  render (){
    return (

    	<section className="callout">
	      <div className="container text-center">
	        <h2 className="mx-auto mb-5">Welcome to
	          <em> your </em>
	          next website!</h2>
	        <a className="btn btn-primary btn-xl" href="https://startbootstrap.com/template-overviews/stylish-portfolio/">Download Now!</a>
	      </div>
	    </section>

    )
  }
}

export default Callout;