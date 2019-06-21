import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withSecurity } from '../../../framework/routing/SecureRoutes';
//import { withSecureLayout } from '../../layout/SecureLayout';

const Dashboard = ({ dispatch }) => {
	
	useEffect(() => {
	
	}, []);
	
	return (
	<div className="p-grid">
	   <div className="p-col-12">
	      <div className="card">
	         <ul>
	            Dashboard
	         </ul>
	      </div>
	   </div>
	</div>
	);
};

export default connect(
	state => ({
		
	})
)(withSecurity(Dashboard));

