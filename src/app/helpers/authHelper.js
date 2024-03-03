export const setAuthToken = (token) => {
	localStorage.setItem('apiToken', token);
}

export const getAuthToken = () => JSON.parse(localStorage.getItem('apiToken'))?.token

export const hasAuthToken = () => getAuthToken() !== null

export const checkNullAuthToken = () => getAuthToken() === null
// isauthtokenequaltonull
export const removeAuthToken = () => localStorage.removeItem("apiToken");

