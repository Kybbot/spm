import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from "react";

export type CheckboxProps = {
	name: string;
	className?: string;
} & Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "size" | "ref">;

type Ref = HTMLInputElement;

export const Checkbox = forwardRef<Ref, CheckboxProps>(({ name, className, ...props }, forwardedRef) => {
	return (
		<div className="customCheckbox">
			<input
				ref={forwardedRef}
				type="checkbox"
				name={name}
				className={`customCheckbox__input ${className ? className : ""}`}
				{...props}
			/>
			<svg width="18" height="18" focusable="false" aria-hidden="true" className="customCheckbox__svg">
				<use xlinkHref="/icons.svg#check" />
			</svg>
		</div>
	);
});
