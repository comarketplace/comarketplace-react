import ServiceConnector from './ServiceConnector';
import applicationStore from '../redux/ApplicationStore';
import * as properties from '../../app/config/properties';

export default class BaseService {
	constructor() {
		this.serviceConnector = () => {
			const state = applicationStore.getState();
			const { authContext } = state;
			return new ServiceConnector(properties.API_URL || '', authContext.token);
		};
	}
}
