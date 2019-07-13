import React from 'react'
import { connect } from 'react-redux'
import withSecureLayout from '../../../framework/layout/withSecureLayout'
import withSecurity from '../../../framework/routing/withSecurity'


const Dashboard = () => {

	return (
		<div>Dashboard</div>
	)
}

export default connect()(withSecurity(withSecureLayout(Dashboard)))