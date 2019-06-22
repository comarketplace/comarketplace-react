import ServiceConnector from './ServiceConnector';
import ApplicationStore from 'framework/redux/ApplicationStore';
import * as properties from 'app/config/properties';

/**
 * @author Edward P. Legaspi
 * @version 0.0.1
 */
export default abstract class BaseService {

    protected apiUrl: string;

    constructor() {
        this.serviceConnector = () => {
            const state = ApplicationStore.getState();
            const {
                authorization
            } = state;
            return new ServiceConnector(properties.API_URL || '', authorization.token);
        };
    }

    function findAll() {
        return this.serviceConnector().callApi({
            url: this.apiUrl
        });
    }

    function findById(id) {

    }

    function deleteById(id) {

    }

    function save() {

    }
}