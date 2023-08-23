import { FC } from "react";

type InfoMessageProps = {
	type: "loading" | "success" | "error";
	message: string;
	className?: string;
	isFullWidth?: boolean;
};

export const InfoMessage: FC<InfoMessageProps> = ({ type, message, className, isFullWidth }) => {
	return (
		<p
			className={`infoMessage infoMessage__${type} ${className ? className : ""} ${
				isFullWidth ? "infoMessage--fullWidth" : ""
			}`}
		>
			{message}
		</p>
	);
};
