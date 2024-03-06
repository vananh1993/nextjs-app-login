export const setAuthToken = (token) => {
	localStorage.setItem('apiToken', token);
}

export const getAuthToken = () => JSON.parse(localStorage.getItem('apiToken'))?.token

export const hasAuthToken = () => JSON.parse(localStorage.getItem('apiToken')) !== null

export const removeAuthToken = () => localStorage.removeItem("apiToken");
