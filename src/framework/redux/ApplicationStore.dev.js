/**
 * @author Edward P. Legaspi
 * @since 1.0
 */
import { createStore, applyMiddleware } from 'redux';
import { persistCombineReducers } from 'redux-persist';
import localForage from 'localforage';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
// import api from '../middleware/api'
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../../app/redux/Reducers'
import { crashReporter } from './Middlewares';
import { monitorReducerEnhancer } from './Enhancers';

const middlewares = [thunk, promise, crashReporter, createLogger()];

const configureStore = preloadedState => {
    const store = createStore(
    	persistCombineReducers(
    		{
    			key: 'comarketplace',
    			storage: localForage,
    			whitelist: ['authorization']
    		},
    		rootReducer,
    	),
        preloadedState,
        composeWithDevTools(
            applyMiddleware(...middlewares),
            monitorReducerEnhancer
        )
    );

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../../app/redux/Reducers', () => {
            store.replaceReducer(rootReducer);
        });
    }

    return store;
};

export default configureStore;