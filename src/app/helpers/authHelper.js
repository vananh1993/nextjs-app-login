export const setAuthToken = (token) => {
	localStorage.setItem('apiToken', token);
}

export const getAuthToken = () => localStorage.getItem('apiToken')

export const hasAuthToken = () => getAuthToken() !== null

