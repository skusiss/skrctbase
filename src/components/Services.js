import React, { Component } from 'react';
import {Helmet} from "react-helmet";


const Services = () => {
	return (
		<section className="whiteBg servicesSec">
			<Helmet>
				<title>We provide digital solutions</title>
				<meta name="description" content="I am about" />
				<meta name="Keywords" content="Hello, solutions, here, digital production" />
			</Helmet>			
			<div className="wrap">
				<ul className="listItems">
					<li className="item">
						<h3>Corporate<br/>Identity</h3>
						<p>Our corporate identity design work shows up in branding, logo design, business cards, infographics and more.</p>
					</li>
					<li className="item">
						<h3>Web design &<br/>development</h3>
						<p>Creating corporate websites that are inventive and unique to address hour budding business needs.</p>
					</li>
					<li className="item">
						<h3>Mobile apps<br/>development</h3>
						<p>We create all kinds of Android and iOS apps that are interactive, engaging and fun. We have created various server side applications with server components being installed.</p>
					</li>
					<li className="item">
						<h3>Digital<br/>marketing</h3>
						<p>We specialize in comprehensive digital marketing service to set the strategic direction.</p>
					</li>
				</ul>
			</div>	
		</section>
    )
}

export default Services;