import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'fullcalendar/dist/fullcalendar.css';
import './layout/layout.css';
import './App.css';
import { ProgressSpinner } from 'primereact/progressspinner';

import SecurityContext from './framework/routing/SecurityContext';
import LandingPageSwitcher from './framework/routing/LandingPageSwitcher';
import * as AuthorizationActions from './framework/redux/module/Authorization';

import Home from './app/pages/public/Home';
import CustomerList from './app/pages/secure/CustomerList';
import Customer from './app/pages/secure/Customer';

import NotFound from './app/pages/public/error/NotFound'
import Error401 from './app/pages/public/error/Error401'
import Error500 from './app/pages/public/error/Error500'
import Locations from './Locations'

class App extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		authContext: PropTypes.shape({
			keycloak: PropTypes.object,
			token: PropTypes.string,
			user: PropTypes.shape({
				username: PropTypes.string,
			}),
			login: PropTypes.func,
			loginUrl: PropTypes.string,
			logout: PropTypes.func,
			logoutUrl: PropTypes.string,
			registerUrl: PropTypes.string,
			accountUrl: PropTypes.string
		}).isRequired,
	};

	setAuthContext = authContext => {
		this.props.dispatch(AuthorizationActions.initialize(authContext));
	};

	render = () => {
		const { authContext } = this.props;
		return (
			<SecurityContext.Provider value={{ authContext: authContext, setAuthContext: this.setAuthContext }}>
				<Suspense fallback={<ProgressSpinner />}>
					<I18nextProvider i18n={i18next}>
						<Switch>
							{Locations.Home.toRoute({ component: LandingPageSwitcher, invalid: NotFound }, true)}
							{/* Public Routes */}
							<Route path="/error-401" component={Error401} />
							<Route path="/error-500" component={Error500} />
							{Locations.Dashboard.toRoute({ component: Home, invalid: NotFound }, true)}
							{/* End Public Routes */}
							{/* Secure Routes */}
							{Locations.CustomerEdit.toRoute({ component: Customer, invalid: NotFound }, true)}
							{Locations.CustomerNew.toRoute({ component: Customer, invalid: NotFound }, true)}
							{Locations.CustomerList.toRoute({ component: CustomerList, invalid: NotFound }, true)}
							{/* End Secure Routes */}

							<Route path="/not-found" component={NotFound} />
							<Route path="*" render={() => <Redirect to="/not-found" />} />
						</Switch>
					</I18nextProvider>
				</Suspense>
			</SecurityContext.Provider>
		);
	};
}

export default connect(state => ({
	authContext: state.authContext,
}))(App);
