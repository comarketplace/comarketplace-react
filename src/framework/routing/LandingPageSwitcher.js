import React, { useContext } from 'react'
import SecureContext from './SecurityContext'
import Home from '../../app/pages/public/Home'
import Dashboard from '../../app/pages/secure/Dashboard'

export default () => {
	
    const context = useContext(SecureContext)
    const { authenticated } = context
    
    console.log('landingPage.authenticated=' + authenticated)
    //console.log('roles=' + keycloak ? keycloak.realmAccess.roles : '')
    console.log(context)

	 if (authenticated) {
		 return <Dashboard / >
	 }
    
    return <Home / > 
}