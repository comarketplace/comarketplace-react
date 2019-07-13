import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import applicationStore from './framework/redux/ApplicationStore';
import App from './App';

/**
 * @author Edward P. Legaspi
 * @version 0.0.1
 */
class AppWrapper extends Component {

	constructor(props) {
		super(props);
		this.persistor = persistStore(applicationStore);
	}

	render() {
		return (
			<Provider store={applicationStore}>
				<PersistGate loading={null} persistor={this.persistor}>
					<App />
				</PersistGate>
			</Provider>
		);
	}
}

export default AppWrapper;