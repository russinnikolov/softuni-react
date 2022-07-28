export const req = async (url, data, method = 'GET') => {
	try {
		const user = localStorage.getItem('auth');
		const auth = JSON.parse(user || '{}');

		let headers = {}

		// if (auth.accessToken) {
		// 	headers['X-Authorization'] = auth.accessToken;
		// }
		//
		// let buildRequest;
		//
		// if (method === 'GET') {
		// 	buildRequest = fetch(url, { headers });
		// } else {
			let buildRequest = fetch(url, {
				method,
				headers: {
					// ...headers,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			});
		// }
		const response = await buildRequest;
		const result = await response.json();

		return result;
	} catch (error) {
		console.log(error.message);
	}
};