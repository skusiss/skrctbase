import React from 'react';

const  Serviceslist = props => {
    return (		
		<li className="item">
			<h3>{props.listhead}</h3>
			<p>{props.paratxt}</p>
		</li>
    )
 }

export default Serviceslist;