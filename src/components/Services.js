import React from 'react';
import {Helmet} from "react-helmet";
import Serviceslist from './Serviceslist';

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
					<Serviceslist listhead="Corporate Identity" paratxt="Our corporate identity design work shows up in branding, logo design, business cards, infographics and more." />
					<Serviceslist listhead="Web Design & Development" paratxt="Designing and developing websites that are inventive and unique to address hour budding business needs." />
					<Serviceslist listhead="Mobile Apps Development" paratxt="We create all kinds of Android and iOS apps that are interactive, engaging and fun. We have created various server side applications with server components being installed." />
					<Serviceslist listhead="Digital Marketing" paratxt="We specialize in comprehensive digital marketing service to set the strategic direction." />
				</ul>
			</div>	
		</section>
    )
}

export default Services;