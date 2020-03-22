import React, { Component } from 'react';
import {Helmet} from "react-helmet";

class About extends Component {
  render() {
    return (		
		<section className="darkBg aboutSec" id="aboutSec">
			<Helmet>
				<title>About skusiss</title>
				<meta name="description" content="Know more about skusiss" />
				<meta name="Keywords" content="digital production" />
			</Helmet>
			<div className="wrap">
				<h3>We help <span>startups</span> and <span>digital agencies</span> launch projects on time, with no pain.</h3>
			</div>	
		</section>
    )
  }
}

export default About;