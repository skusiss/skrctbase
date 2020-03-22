import React, { Component } from 'react';
import {Helmet} from "react-helmet";
class Contact extends Component {
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
				<h4><a href="skusiss@gmail.com">skusiss@gmail.com</a></h4>
				<h6>Call</h6>
				<h4><a href="tel:+910350250496">+91 935 025 0496</a></h4><br/>
				<h4>Have a project to do?</h4>
						
			</div>	
		</section>
    )
  }
}

export default Contact;