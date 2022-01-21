export const getLocalStorage = (name) => {
	const value = localStorage.getItem(name);
	if (!value) return null;

	return JSON.parse(value);
};

export const setLocalStorage = (name, data) => {
	localStorage.setItem(name, JSON.stringify(data));
};

export const removeLocalStorage = (name) => {
	localStorage.removeItem(name);
};
