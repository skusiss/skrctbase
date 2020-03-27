import React, { Component} from 'react';
class Quotation extends Component {
  render() {
    return (
			<form className="quoteForm">
				<h3>Have a project to do?</h3>
				<h4>Yes, I am interested in discussing a </h4> 
				<select name="services">
					<option>Web design</option>
					<option>Web development</option>
					<option>Mobile apps</option>
					<option>Corporate Identity</option>
				</select>
				<h4>project for</h4>
				<input type='text' name='projectname' placeholder='Your project name' required />
				<h4>. My name is</h4>
				<input type='text' name='fullname' placeholder='Your full name' required />
				<h4> and you can email me at </h4>
				<input type='email' name='email' placeholder='Your email id' required />
				<h4>or call me on</h4>
				<input type='tel' name='contact' placeholder='Your contact number' required />
				<h4>.</h4>
				<input type='submit' value='submit'/>
			</form>
    )
  }
}
export default Quotation;