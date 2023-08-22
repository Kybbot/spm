import { ReactNode } from "react";
import { FieldError, FieldValues, Path, RegisterOptions, UseFormRegister } from "react-hook-form";

import { Input, InputProps } from "./Input";

type InputRhfProps<TFormValues extends FieldValues> = {
	name: Path<TFormValues>;
	label: ReactNode | string;
	rules?: RegisterOptions;
	error: FieldError | undefined;
	hideLabel?: boolean;
	hideError?: boolean;
	register?: UseFormRegister<TFormValues>;
} & Omit<InputProps, "name">;

export const InputRhf = <TFormValues extends FieldValues>({
	name,
	label,
	rules,
	error,
	hideLabel = false,
	hideError = false,
	register,
	...props
}: InputRhfProps<TFormValues>) => {
	const hasError = !!(error && error.message);

	return (
		<label htmlFor={name} className="label">
			<span className={`label__text ${hideLabel ? "srOnly" : ""}`}>{label}</span>
			<Input
				id={name}
				name={name}
				className={`${hasError ? "input--error" : ""}`}
				{...props}
				{...(register && register(name, rules))}
				aria-invalid={hasError ? "true" : "false"}
			/>
			{hasError && (
				<span className={`label__error ${hideError ? "srOnly" : ""}`} role="alert">
					{error.message}
				</span>
			)}
		</label>
	);
};
