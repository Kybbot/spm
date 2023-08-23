import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { axiosInstance } from "@/shared/utils/axios";

import { userRoleType } from "@/shared/types/user";
import { ApiError, ApiResult, SignUpResponse } from "@/shared/types/api";

export const useSignUp = () => {
	return useMutation<
		ApiResult<SignUpResponse>,
		AxiosError<ApiError>,
		{
			body: {
				email: string;
				password: string;
				role: userRoleType;
			};
		}
	>({
		mutationFn: async ({ body }) => {
			const { data } = await axiosInstance.post<ApiResult<SignUpResponse>>(
				`/auth/sign-up`,
				JSON.stringify(body),
			);
			return data;
		},
	});
};
