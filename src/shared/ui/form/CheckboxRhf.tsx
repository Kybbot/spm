import { ReactNode } from "react";
import { FieldError, FieldValues, Path, RegisterOptions, UseFormRegister } from "react-hook-form";

import { Checkbox, CheckboxProps } from "@/shared/ui/form/Checkbox";

type CheckboxRhfProps<TFormValues extends FieldValues> = {
	name: Path<TFormValues>;
	label: ReactNode | string;
	rules?: RegisterOptions;
	error: FieldError;
	hideError?: boolean;
	labelClassName?: string;
	register?: UseFormRegister<TFormValues>;
} & Omit<CheckboxProps, "name">;

export const CheckboxRhf = <TFormValues extends FieldValues>({
	name,
	label,
	rules,
	error,
	hideError = true,
	register,
	...props
}: CheckboxRhfProps<TFormValues>) => {
	const hasError = !!(error && error.message);

	return (
		<label htmlFor={name} className="label label--row">
			<Checkbox
				id={name}
				name={name}
				className={`${hasError ? "checkbox--error" : ""}`}
				{...props}
				{...(register && register(name, rules))}
				aria-invalid={hasError ? "true" : "false"}
			/>
			<span className="label__text">{label}</span>
			{hasError && (
				<span className={`label__error ${hideError ? "srOnly" : ""}`} role="alert">
					{error.message}
				</span>
			)}
		</label>
	);
};
