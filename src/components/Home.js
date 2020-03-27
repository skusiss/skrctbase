import React from 'react';
import {Helmet} from "react-helmet";

const Home =() => {
 	return (
		<section className="whiteBg homeSec">
			<Helmet>
				<title>Skusiss | Digital Solutions</title>
				<meta name="description" content="Creative people in the digital ege" />
				<meta name="Keywords" content="Web site design, web development, mobile apps, ecommerce, digital production, digital marketing" />
			</Helmet>
			<div className="textInfo">
				<h1>Digital Solutions</h1>
				<h3>creative people - creative idea</h3>
				<p>Web Designing / Development / Mobile Apps / Digital Marketing / Consulting</p>
			</div>
		</section>
    )
}

export default Home;