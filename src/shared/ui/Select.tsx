import { ReactNode, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import * as SelectPrimitive from "@radix-ui/react-select";

interface SelectProps extends SelectPrimitive.SelectProps {
	children: ReactNode;
	id: string;
	error: FieldError | undefined;
	hideError?: boolean;
	style?: "white" | "grey";
	placeholder?: string;
	useTriggetWidth?: boolean;
	customValues?: Record<string, string>;
}

type SelectRef = HTMLButtonElement;

export const Select = forwardRef<SelectRef, SelectProps>(
	(
		{
			children,
			id,
			style,
			error,
			hideError = false,
			placeholder,
			useTriggetWidth = true,
			customValues,
			...props
		},
		forwardedRef,
	) => {
		const hasError = !!(error && error.message);

		return (
			<SelectPrimitive.Root {...props}>
				<SelectPrimitive.Trigger
					ref={forwardedRef}
					className={`select__trigger ${style === "grey" ? "select__trigger--grey" : ""} ${
						hasError ? "select__trigger--error" : ""
					}`}
					id={id}
				>
					{customValues ? (
						<SelectPrimitive.Value>
							{props.value ? customValues[props.value] : placeholder}
						</SelectPrimitive.Value>
					) : (
						<SelectPrimitive.Value placeholder={placeholder} />
					)}
					<SelectPrimitive.Icon className="select__icon">
						<svg width="15" height="15" focusable="false">
							<use xlinkHref="/icons.svg#arrow" />
						</svg>
					</SelectPrimitive.Icon>
					{hasError && (
						<span className={`label__error ${hideError ? "srOnly" : ""}`} role="alert">
							{error.message}
						</span>
					)}
				</SelectPrimitive.Trigger>
				<SelectPrimitive.Portal>
					<SelectPrimitive.Content
						position="popper"
						sideOffset={5}
						className={`select__content ${style === "grey" ? "select__content--grey" : ""} ${
							useTriggetWidth ? "select__content--triggerWidth" : ""
						}`}
					>
						<SelectPrimitive.Viewport className="select__viewport">{children}</SelectPrimitive.Viewport>
					</SelectPrimitive.Content>
				</SelectPrimitive.Portal>
			</SelectPrimitive.Root>
		);
	},
);

interface SelectItemProps extends SelectPrimitive.SelectItemProps {
	children: ReactNode;
}

type SelectItemRef = HTMLDivElement;

export const SelectItem = forwardRef<SelectItemRef, SelectItemProps>(
	({ children, ...props }, forwardedRef) => {
		return (
			<SelectPrimitive.Item {...props} ref={forwardedRef} className="select__item">
				<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
				<SelectPrimitive.ItemIndicator className="select__itemIndicator">
					<svg width="12" height="12" focusable="false">
						<use xlinkHref="/icons.svg#check" />
					</svg>
				</SelectPrimitive.ItemIndicator>
			</SelectPrimitive.Item>
		);
	},
);
