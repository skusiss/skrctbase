import React, { Component } from 'react';
import {Helmet} from "react-helmet";
class Home extends Component {
  render() {
    return (
		<section>
			<Helmet>
				<title>Skusiss | Digital Solutions</title>
				<meta name="description" content="Web site created using create-react-app" />
				<meta name="Keywords" content="Hello, solutions, here, digital production" />
			</Helmet>
			<div className="wrap">
				<h1>Home</h1>
			</div>
		</section>
    )
  }
}

export default Home;