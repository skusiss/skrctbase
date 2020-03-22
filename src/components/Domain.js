import React, { Component } from 'react';
import {Helmet} from "react-helmet";

class Domain extends Component {
  render() {
    return (
		<section className="darkBg domainSec">
			<Helmet>
				<title>Key Domain experties</title>
				<meta name="description" content="Let's connect" />
				<meta name="Keywords" content="skusiss@gmail.com" />
			</Helmet>
			<div className="wrap">
				<h3>Having over 15 years of experience in providing Web app development services and solutions and having completed numbers of projects in different domains.</h3>
				<ul className="listItems">
					<li className="item">
						<span className="domain-icon ecommerce"></span>
						<h6>ecommerce</h6>
					</li>
					<li className="item">
						<span className="domain-icon b2b"></span>
						<h6>b2b</h6>
					</li>
					<li className="item">
						<span className="domain-icon education"></span>
						<h6>Education</h6>
					</li>
					<li className="item">
						<span className="domain-icon customization"></span>
						<h6>customization</h6>
					</li>
					<li className="item">
						<span className="domain-icon tour"></span>
						<h6>Tour & travel</h6>
					</li>
					<li className="item">
						<span className="domain-icon health"></span>
						<h6>health</h6>
					</li>
					<li className="item">
						<span className="domain-icon payroll"></span>
						<h6>Hr payroll</h6>
					</li>
					<li className="item">
						<span className="domain-icon realestate"></span>
						<h6>real estate</h6>
					</li>				
				</ul>
			</div>

		</section>
    )
  }
}

export default Domain;