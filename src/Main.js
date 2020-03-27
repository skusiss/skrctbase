import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink,} from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Domain from './components/Domain';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Notfound from './components/Notfound';

import './css/Style.scss';

class Main extends Component {
  render() {
    return (
		<Router>
			<nav>
				<NavLink to="/" className="brand"></NavLink>
				<ul>
					<li><NavLink to="/about" activeClassName="active">About</NavLink></li>
					<li><NavLink to="/services" activeClassName="active">Services</NavLink></li>
					<li><NavLink to="/Domain" activeClassName="active">Domain</NavLink></li>
					<li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
					<li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
				</ul>
			</nav>
			<Switch>
				<Route exact path="/"><Home /></Route>
				<Route path="/about"><About /></Route> 
				<Route path="/services"><Services /></Route>
				<Route path="/Domain"><Domain /></Route>
				<Route path="/projects"><Projects /></Route>
				<Route path="/contact"><Contact /></Route>
				<Route path="*" component={Notfound} />
	        </Switch>
		</Router>
    )
  }
}

export default Main;