import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import Quotation from './Quotation';
import Contactinfo from './Contactinfo';
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
		<section className="darkBg contactSec">
			<Helmet>
				<title>Get in touch</title>
				<meta name="description" content="Let's connect" />
				<meta name="Keywords" content="skusiss@gmail.com" />
			</Helmet>
			<div className="wrap">
				<h3>Let's <span>get in</span> touch</h3>
				<Contactinfo type="Email" details="skusiss@gmail.com" />				
				<Contactinfo type="Phone" details="+91 9350250496" />				
				<Quotation />
			</div>	
		</section>
    )
  }
}



export default Contact;