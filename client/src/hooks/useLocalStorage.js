import {useState} from 'react';

export const useLocalStorage = (key, value) => {
	const [val, setVal] = useState((key) => {
		const store = localStorage.getItem(key);

		return store ? JSON.parse(store) : value;
	});

	const setLocalStorage = (newValue) => {
		localStorage.setItem(key, JSON.stringify(newValue));

		setVal(newValue);
	}

	return [
		val,
		setLocalStorage
	];
}