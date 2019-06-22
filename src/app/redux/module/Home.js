import Dispatch from '../../../framework/redux/Dispatch';

const CLICKED = 'home/CLICKED';

export default function reducer(state={}, action) {
	switch(action.type) {
		case Dispatch.successAction(CLICKED): {
			return {
				...state,
				payload: {
					'click': "true"
				}
			}
		}
		default:
			return state;
	}
}

export const click = () => dispatch => {
	Dispatch.done(dispatch, CLICKED, undefined)
};