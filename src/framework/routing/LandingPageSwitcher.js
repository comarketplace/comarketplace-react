import React, { useContext } from 'react';
import SecurityContext from './SecurityContext';
import Home from '../../app/pages/public/Home';
import Dashboard from '../../app/pages/secure/Dashboard';

export default () => {
	const { authContext } = useContext(SecurityContext) || {}
	const { keycloak } = authContext || {}

	// if (keycloak && keycloak.authenticated) {
	// 	return <Dashboard />;
	// }

	return <Home />;
};
