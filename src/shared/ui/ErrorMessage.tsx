import { FC } from "react";
import { AxiosError } from "axios";

import { InfoMessage } from "@/shared/ui/InfoMessage";

import { ApiError } from "@/shared/types/api";

type ErrorMessage = {
	error: AxiosError<ApiError, unknown>;
	isFullWidth?: boolean;
};

export const ErrorMessage: FC<ErrorMessage> = ({ error, isFullWidth }) => {
	if (error.response && error.response.data) {
		return <InfoMessage type="error" message={error.response.data} isFullWidth={isFullWidth} />;
	}

	return <InfoMessage type="error" message={error.message} isFullWidth={isFullWidth} />;
};
