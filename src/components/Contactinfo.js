import React, {Fragment} from 'react';

const  Contactinfo = props => {
    return (		
		<Fragment>
			<h4>{props.type}</h4>
			<h6>{props.details}</h6>
		</Fragment>
    )
 }

export default Contactinfo;