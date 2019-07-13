import * as Yup from 'yup'
import Location from 'react-app-location'

const integer = Yup.number().integer();
const wholeNbr = integer.positive();
const string = Yup.string();

export const HomeLocation = new Location('/');
export const DashboardLocation = new Location('/dashboard');

export const Error401Location = new Location('/error/401');
export const Error500Location = new Location('/error/500');

export const CustomerEditLocation = new Location('/customers/:type/:entityId', {
	type: string.required(),
	entityId: wholeNbr.required()
});
export const CustomerNewLocation = new Location('/customers/:type', {
	type: string.required()
});
export const CustomerListLocation = new Location('/customers', null, null);

export default {
	Home: HomeLocation,
	Dashboard: DashboardLocation,
	CustomerList: CustomerListLocation,
	CustomerEdit: CustomerEditLocation,
	CustomerNew: CustomerNewLocation,
	Error401: Error401Location,
	Error500: Error500Location
};