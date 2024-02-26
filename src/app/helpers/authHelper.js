export const setAuthToken = (token) => {
	localStorage.setItem('apiToken', token);
}

export const getAuthToken = () => localStorage.getItem('apiToken')

export const hasAuthToken = () => getAuthToken() !== null

export const checkNullAuthToken = () => getAuthToken() === null

export const removeAuthToken = () => localStorage.removeItem("apiToken");

