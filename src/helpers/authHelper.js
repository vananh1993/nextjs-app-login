export const setAuthToken = (token) => {
	if (typeof window !== "undefined" && window.localStorage) {
		window.localStorage.setItem('apiToken', token);
	}
}

export const getAuthToken = () => {
	if (typeof window !== "undefined" && window.localStorage) {
		return JSON.parse(window.localStorage.getItem('apiToken'))?.token;
	}

	return null;
};

export const hasAuthToken = () => {
	if (typeof window !== "undefined" && window.localStorage) {
		return JSON.parse(window.localStorage.getItem('apiToken')) !== null;
	}

	return false;
};

export const removeAuthToken = () => {
	if (typeof window !== "undefined" && window.localStorage) {
		window.localStorage.removeItem("apiToken");
	}
};
