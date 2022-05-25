import { SET_COUNTRY, ALL_CITIES } from "./actions_types";
import data from "../../stays.json";

export function set_countri(city, guests) {
	if (city && !guests) {
		return {
			type: SET_COUNTRY,
			payload: data.filter((elem) => elem.city.includes(city.split(",")[0])),
		};
	} else {
		return {
			type: SET_COUNTRY,
			payload: data.filter(
				(elem) => elem.city.includes(city.split(",")[0]) && elem.maxGuests >= guests
			),
		};
	}
}

export function all_cities() {
	data?.map((elem) => elem.city);
	let z = new Set(data?.map((elem, i) => `${elem.city}, ${elem.country}`));
	let cities_country = [...z];
	return {
		type: ALL_CITIES,
		payload: cities_country.map((elem) => elem),
	};
}
