import { FC, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
	children: ReactNode;
	width: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ children, width }) => {
	return (
		<button className="btn" style={{ width: width }}>
			{children}
		</button>
	);
};
