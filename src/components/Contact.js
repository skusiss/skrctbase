import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import Quotation from './Quotation';
class Contact extends Component {
	constructor(props){
		super (props);
		this.state = {
			email: "skusiss@gmail.com",
			phone: "+91 9560246999"
		}
	}
  render() {
    return (
		<section className="whiteBg contactSec">
			<Helmet>
				<title>Get in touch</title>
				<meta name="description" content="Let's connect" />
				<meta name="Keywords" content="skusiss@gmail.com" />
			</Helmet>
			<div className="wrap">
				<h3>Let's <span>get in</span> touch</h3>
				<h6>Email</h6>
				<h4><a href={`mailto: ${this.state.email}`}>{this.state.email}</a></h4>
				<h6>Call</h6>
				<h4><a href={`tel: ${this.state.phone}`}>{this.state.phone}</a></h4><br/>
				<Quotation />
			</div>	
		</section>
    )
  }
}



export default Contact;