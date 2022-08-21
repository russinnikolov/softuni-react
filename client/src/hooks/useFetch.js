import {useState, useEffect} from 'react';

const useFetch = (url, method = 'GET', data = {}) => {
	const [data, setData] = useState({});
	const [error, setError] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch(url, {
			method: method,
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data ?? null)
		})
			.then((response) => response.json())
			.then((result) => setData(result))
			.catch((err) => setError(err))
			.finally(() => {
				setLoading(false);
			})
	}, [url]);
}