import React, { Component} from 'react';
import * as emailjs from 'emailjs-com';
class Quotation extends Component {
	constructor(props) {
		super(props);
		this.state={
			services:'',
			projectname:'',
			fullname:'',
			email:'',
			contact:''
		}
	}
	handleSubmit(e) {
	    e.preventDefault()
	    const {services, projectname, fullname, email, contact } = this.state
	    let templateParams = {
	      from_name: fullname,
	      to_name: 'Dear Team',
	      subject: 'New Project Enquiry',
	      //message_html: services, projectname, email, contact;
	      services:services,
	      projectname:projectname,
	      email:email,
	      contact:contact
	     }
	     emailjs.send(
	      'yahoo',
	      'template_oErjmJVe',
	       templateParams,
	      'user_rthWSagIPCKqMBt5JMr1j'
	     )
	     this.resetForm()
	 }
	resetForm() {
	    this.setState({
	      services: '',
	      projectname: '',
	      fullname: '',
	      email: '',
	      contact: ''
	    })
	  }
	handleChange = (param, e) => {
	    this.setState({ [param]: e.target.value })
	  }
  render() {
    return (
			<form onSubmit={this.handleSubmit} className="quoteForm">
				<h3>Have a project to do?</h3>
				<h4>Yes, I am interested in discussing a </h4> 
				<select name="services"  value={this.state.services} onChange={this.handleChange.bind(this, 'services')}>
					<option>Web design</option>
					<option>Web development</option>
					<option>Mobile apps</option>
					<option>Corporate Identity</option>
				</select>
				<h4>project for</h4>
				<input type='text' name='projectname' value={this.state.projectname} onChange={this.handleChange.bind(this, 'projectname')} placeholder='Your project name' required />
				<h4>. My name is</h4>
				<input type='text' name='fullname' value={this.state.fullname} onChange={this.handleChange.bind(this, 'fullname')} placeholder='Your full name' required />
				<h4> and you can email me at </h4>
				<input type='email' name='email' value={this.state.email} onChange={this.handleChange.bind(this, 'email')} placeholder='Your email id' required />
				<h4>or call me on</h4>
				<input type='tel' name='contact' value={this.state.contact} onChange={this.handleChange.bind(this, 'contact')} placeholder='Your contact number' required />
				<h4>.</h4>
				<input type='submit' value='submit'/>
			</form>
    )
  }
}
export default Quotation;