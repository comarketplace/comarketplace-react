import React, {  } from 'react'
import { connect } from 'react-redux'
import { withSecurity } from '../../../framework/routing/SecureRoutes'
import { withSecureLayout } from '../../../framework/layout/withSecureLayout'

const Listings = ({ dispatch }) => {
	
	return (
		<div className="p-grid">
            <div className="p-col-12">
                <div className="card">
                    <h1>Listings</h1>
                    <p>Use this page to start from scratch and place your custom content.</p>
                </div>
            </div>
        </div>
	)
}

export default connect(
	state => ({
		
	})
)(withSecurity(withSecureLayout(Listings)))

