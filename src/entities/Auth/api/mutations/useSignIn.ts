import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { axiosInstance } from "@/shared/utils/axios";

import { ApiError, ApiResult, SignInResponse } from "@/shared/types/api";

export const useSignIn = () => {
	return useMutation<
		ApiResult<SignInResponse>,
		AxiosError<ApiError>,
		{
			body: {
				email: string;
				password: string;
			};
		}
	>({
		mutationFn: async ({ body }) => {
			const { data } = await axiosInstance.post<ApiResult<SignInResponse>>(
				`/auth/login`,
				JSON.stringify(body),
			);
			return data;
		},
	});
};
