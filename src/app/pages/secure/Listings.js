import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withSecurity } from '../../../framework/routing/SecureRoutes';
//import { withSecureLayout } from '../../layout/SecureLayout';

const Listings = ({ dispatch }) => {
	
	useEffect(() => {
	
	}, []);
	
	return (
	<div className="p-grid">
	   <div className="p-col-12">
	      <div className="card">
	         <ul>
	            Hello
	         </ul>
	      </div>
	   </div>
	</div>
	);
};

export default connect(
	state => ({
		
	})
)(withSecurity(Listings));

