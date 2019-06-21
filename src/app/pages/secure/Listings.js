import React, {  } from 'react';
import { connect } from 'react-redux';
import { withSecurity } from '../../../framework/routing/SecureRoutes';
// import { withSecureLayout } from '../../layout/SecureLayout';

const Listings = ({ dispatch }) => {
	
	return (
		<div className="p-grid">
		   <div className="p-col-12">
		      <div className="card">
		         <ul>
		            Listings
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

