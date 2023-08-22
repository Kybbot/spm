import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from "react";

export type InputProps = {
	name: string;
	className?: string;
} & Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "size" | "ref">;

type Ref = HTMLInputElement;

export const Input = forwardRef<Ref, InputProps>(({ name, className, ...props }, forwardedRef) => {
	return (
		<input ref={forwardedRef} name={name} className={`input ${className ? className : ""}`} {...props} />
	);
});
