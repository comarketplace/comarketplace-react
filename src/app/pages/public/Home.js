import React, { connect } from 'react';
import { useTranslation } from "react-i18next";

const Home = () => {
	
	const { t, i18n } = useTranslation();

	const changeLanguage = (lang) => {
		i18n.changeLanguage(lang);
	}
	
	return (
		<div>
			<button onClick={() => changeLanguage('en')}>en</button>
			<button onClick={() => changeLanguage('ja')}>ja</button>
			
			Home {t('hello')}
			<a href="/listings" className="p-button secondary-btn">
				<span className="p-button-text">Listings</span>
			</a>
		</div>
	);
}

export default Home