import Error, { FATAL } from '../model/Error';
import { FAIL, SUCCESS } from '../model/Response';

/**
 * @author Edward P. Legaspi
 * @since 1.0
 */
export default class Dispatch {
    static loadingAction(type) {
        return `${type}_LOADING`;
    }

    static successAction(type) {
        return `${type}_OK`;
    }

    static errorAction(type) {
        return `${type}_KO`;
    }

    static loading(dispatch, type) {
        dispatch({
            type: Dispatch.loadingAction(type)
        });
    }

    static success(dispatch, type, data) {
        dispatch({
            type: Dispatch.successAction(type),
            payload: {
                data
            },
            error: false
        });
    }

    static error(dispatch, type, data) {
        /* eslint-disable no-console */
        console.error('Error encountered on action: ', type);
        console.error('ERROR: ', data);
        console.trace();
        /* eslint-enable */
        dispatch({
            type: Dispatch.errorAction(type),
            data: {
                error: new Error(data),
            },
            error: true
        });
    }

    static done(dispatch, type, response) {
        /* eslint-disable no-console */
        console.log('\n\n=================================');
        console.log('Dispatch done');
        console.log('type : ', type);
        console.log('response : ', response);
        console.log('=================================\n\n\n');
        /* eslint-enable */

        if (response.status === SUCCESS) {
            Dispatch.success(dispatch, type, response.result);

        } else if (response.status === FAIL && response.error.type === FATAL) {
            Dispatch.error(dispatch, type, response.error);
        
        } else {
        	Dispatch.error(dispatch, type, response.error);
        }
    }

}