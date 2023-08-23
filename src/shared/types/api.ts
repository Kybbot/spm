import { userRoleType, userStatusType } from "./user";

export enum ApiStatuses {
	success = "OK",
}

export type ApiResult<T> = {
	data: T;
	status: ApiStatuses.success;
};

export type ApiError = "string";

export type ApiResponse<T> = ApiError | ApiResult<T>;

// AUTH
export type SignUpResponse = {
	userId: number;
	email: string;
	role: userRoleType;
	status: userStatusType;
};

export type SignInResponse = {
	userId: number;
	email: string;
	role: userRoleType;
	status: userStatusType;
};
