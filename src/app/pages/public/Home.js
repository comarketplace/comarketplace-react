import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useTranslation } from "react-i18next"
import { withPublicLayout } from '../../../framework/layout/withPublicLayout'

const Home = () => {
	const [count, setCount] = useState(0)
//	
//	const { t, i18n } = useTranslation()
//
//	const changeLanguage = (lang) => {
//		i18n.changeLanguage(lang)
//	}
//	<button onClick={() => changeLanguage('en')}>en</button>
//	<button onClick={() => changeLanguage('ja')}>ja</button>
	return (
		<div>
			<a href="/listings" className="p-button secondary-btn">
				<span className="p-button-text">Listings</span>
			</a>
		</div>
	)
}

export default connect(
	state => ({
		
	})
)(withPublicLayout(Home))
