import { SET_COUNTRY, ALL_CITIES } from "../Actions/actions_types";

const initialState = {
	city: [],
    cities : []
};

export function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case SET_COUNTRY:
			return {
				...state,
				city: payload,
			};
		case ALL_CITIES:
			return {
				...state,
				cities: payload,
			};
		default:
			return state;
	}
}
