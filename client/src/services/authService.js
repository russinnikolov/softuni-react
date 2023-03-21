import {req} from "../utils/requester";
import {error} from "../utils/error";

const baseUrl = 'http://localhost:3030/user';

export const login = async (userName, password) => {
	let response = '';
	try {
		response = await req(`${baseUrl}/login`, {userName, password}, 'POST');
	} catch (err) {
		error(err.message);
		return;
	}
	return response;
}


export const logout = async (accessToken) => {
	try {
		return await fetch(`${baseUrl}/logout`, {
			headers: {
				'X-Authorization': accessToken
			}
		});
	} catch (error) {
		console.log(error);
	}
};

export const register = (data) => {
	try {
		return req(`${baseUrl}/register`, data, 'POST');
	} catch (error) {
		console.log(error);
	}
}