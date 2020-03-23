import React, { Component } from 'react';
import {Helmet} from "react-helmet";

class Domain extends Component {
	constructor(props){
		super(props);
		this.state = {
			data: ["ecommerce", "b2b", "education", "customization", "travel", "health", "payroll", "accommodation"]
		}
	}

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
					{this.state.data.map(d => 
						<li className="item" key={d}>
							<span className={`domain-icon ${d}`}></span>
							<h6>{d}</h6>
						</li>
					)}								
				</ul>
			</div>

		</section>
    )
  }
}

export default Domain;