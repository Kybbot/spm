import { FC, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
	children: ReactNode;
	width?: string;
	color?: "green" | "red";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ children, width, color, ...props }) => {
	return (
		<button
			className={`btn ${color ? `btn--${color}` : ""}`}
			style={{ width: width ? width : "" }}
			{...props}
		>
			{children}
		</button>
	);
};
