import React, { Component} from 'react';


export default class Quotation extends Component {
	constructor(props){
		super(props);
		this.state={
			services:'',
			projectname:'',
			fullname:'',
			email:'',
			contact:'',
		}
	}
	handleFormSubmit = e =>{
	  e.preventDefault();
	  console.log(this.state);
	}
  render() {
    return (
			<form id="quoteForm" className="quoteForm" method="POST">
				<h3>Have a project to do?</h3>
				<h4>Yes, I am interested in discussing a </h4> 
				<select name="services" id="services_list" onChange={e => this.setState({ services: e.target.value })}>
					<option>Web design</option>
					<option>Web development</option>
					<option>Mobile apps</option>
					<option>Corporate Identity</option>
				</select>
				<h4>project for</h4>
				<input type='text' name='projectname' value={this.state.projectname} id="projectname" onChange={e => this.setState({ projectname: e.target.value })} placeholder='Your project name' required />
				<h4>. My name is</h4>
				<input type='text' name='fullname' value={this.state.fullname} id="fullname"onChange={e => this.setState({ fullname: e.target.value })} placeholder='Your full name' required />
				<h4> and you can email me at </h4>
				<input type='email' name='email' value={this.state.email} id="email" placeholder='Your email id'onChange={e => this.setState({ email: e.target.value })} required />
				<h4>or call me on</h4>
				<input type='tel' name='contact' value={this.state.contact} id="contact" placeholder='Your contact number'onChange={e => this.setState({ contact: e.target.value })} required />
				<h4>.</h4>
				<input type='submit' id="submit_quote" onClick={e => this.handleFormSubmit(e)} value='submit'/>
			</form>
    )
  }
}