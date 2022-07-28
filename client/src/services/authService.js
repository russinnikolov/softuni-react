import {req} from "../utils/requester";

const baseUrl = 'http://localhost:3030/user';

export const login = (email, password) =>
	req(`${baseUrl}/login`, { email, password }, 'POST');


export const logout = async (accessToken) => {
	try {
		const response = await fetch(`${baseUrl}/logout`, {
			headers: {
				'X-Authorization': accessToken
			}
		});

		return response;
	} catch (error) {
		console.log(error);
	}
};

export const register = (email, password) =>
	req(`${baseUrl}`, {email, password}, 'POST');