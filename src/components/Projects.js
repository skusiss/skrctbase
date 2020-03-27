import React, { Component } from 'react';
import {Helmet} from "react-helmet";

export default class Projects extends Component {
  render() {
    return (
		<section>
			<Helmet>
				<title>About skusiss</title>
				<meta name="description" content="I am about" />
				<meta name="Keywords" content="Hello, solutions, here, digital production" />
			</Helmet>
			<div className="wrap">
				<h1>Projects</h1>
			</div>	
		</section>
    )
  }
}