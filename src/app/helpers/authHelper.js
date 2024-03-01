export const setAuthToken = (token) => {
	localStorage.setItem('apiToken', token);
}

export const getAuthToken = () => JSON.parse(localStorage.getItem('apiToken'))[0]

export const hasAuthToken = () => getAuthToken() !== null

export const checkNullAuthToken = () => getAuthToken() === null

export const removeAuthToken = () => localStorage.removeItem("apiToken");

