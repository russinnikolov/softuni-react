export const req = async (url, data, method = 'GET') => {
	try {
		const user = localStorage.getItem('auth');
		const auth = JSON.parse(user || '{}');

		let headers = {}

		if (auth.accessToken) {
			headers['X-Authorization'] = auth.accessToken;
		}

		let buildRequest;

		if (method === 'GET') {
			buildRequest = fetch(url, { headers });
		} else {
			buildRequest = fetch(url, {
				method,
				headers: {
					...headers,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			});
		}
		const response = await buildRequest;
		return await response.json();
	} catch (error) {
		console.log(error);
	}
};