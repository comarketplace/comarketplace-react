import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import {
    connect
} from 'react-redux'
import './App.css'
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import SecurityContext from './framework/routing/SecurityContext'
import * as AuthorizationActions from './framework/redux/module/Authorization';
import LandingPageSwitcher from './framework/routing/LandingPageSwitcher'
import Listings from './app/pages/secure/Listings'
import Access from './app/pages/public/Access'
import { ProgressSpinner } from 'primereact/progressspinner';
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

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
            	<BrowserRouter>
            		<Suspense fallback={<ProgressSpinner />}>
	            		<I18nextProvider i18n={i18next}>
		            		<Switch>
			            		<Route exact path="/" component={LandingPageSwitcher} />
			                    {/* Public Routes */}
			                    <Route path="/listings" component={Listings} />
			                    <Route path="/access" component={Access} />
		            		</Switch>
						</I18nextProvider>
					</Suspense>
        		</BrowserRouter>
        	</SecurityContext.Provider>
        )
    }
}

export default connect(
	state => ({
		authorization: state.authorization,
	})
)(App)