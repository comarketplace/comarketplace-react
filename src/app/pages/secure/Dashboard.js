import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { withSecurity } from '../../../framework/routing/SecureRoutes'
import { withSecureLayout } from '../../../framework/layout/withSecureLayout'
import * as HomeActions from '../../redux/module/Home'
import { withTranslation } from 'react-i18next'
import * as AuthorizationActions from '../../../framework/redux/module/Authorization'

const Dashboard = ({ dispatch, ...componentProps }) => {
	useEffect(() => {
		dispatch(HomeActions.click())
	}, [])

	const logout = () => {
		    dispatch(AuthorizationActions.logout({ now: true }))
		  }
	
	return (
		<div className="p-grid">
			<button onClick={logout()}>Logout</button>
		   <div className="p-col-12">
		      <div className="card">
		         <ul>
		            Dashboard Home 
		         </ul>
		      </div>
		   </div>
		</div>
	)
}

export default connect(
	state => ({
		
	})
)(Dashboard)