import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './App.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import SecurityContext from './framework/routing/SecurityContext'
import * as AuthorizationActions from './framework/redux/module/Authorization';
import LandingPageSwitcher from './framework/routing/LandingPageSwitcher'
import Listings from './app/pages/secure/Listings'
import Access from './app/pages/public/Access'

class App extends React.Component {
	
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        authorization: PropTypes.shape({
            auth: PropTypes.object,
            token: PropTypes.string,
            user: PropTypes.shape({
                username: PropTypes.string,
            }),
        }).isRequired,
    }
    
    setAuth = auth => {
    	this.props.dispatch(AuthorizationActions.initialize(auth));
    };

    render() {
        const { auth } = this.props.authorization
        
        return (
    		<SecurityContext.Provider value={{ ...auth, setAuth: this.setAuth }}>
	    		<I18nextProvider i18n={i18next}>
	            	<BrowserRouter>
	            		<Switch>
		            		<Route exact path="/" component={LandingPageSwitcher} />
		                    {/* Public Routes */}
		                    <Route path="/listings" component={Listings} />
		                    <Route path="/access" component={Access} />
	            		</Switch>
            		</BrowserRouter>
        		</I18nextProvider>
        	</SecurityContext.Provider>
        )
    }
}

export default connect(
	state => ({
		authorization: state.authorization,
	})
)(App)