import axios, { AxiosError, AxiosResponse } from "axios";

export const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_SERVER_ENDPOINT,
	headers: {
		"Content-Type": "application/json",
	},
});

const handleSuccessResponse = (response: AxiosResponse) => {
	return response;
};

const handleErrorResponse = (error: AxiosError) => {
	return Promise.reject(error);
};

axiosInstance.interceptors.response.use(handleSuccessResponse, handleErrorResponse);
