import { FC } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/shared/ui/Button";
import { InputRhf } from "@/shared/ui/form/InputRhf";
import { ErrorMessage } from "@/shared/ui/ErrorMessage";

import { useSignIn } from "@/entities/Auth";

type FormValues = {
	email: string;
	password: string;
};

const SignIn: FC = () => {
	const { isLoading, isError, error, mutate } = useSignIn();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = (formValues: FormValues) => {
		mutate({ body: { ...formValues } });
	};

	return (
		<section className="signIn">
			<div className="signIn__container">
				<h1 className="auth__title">Sign In</h1>
				<form className="form" onSubmit={handleSubmit(onSubmit)}>
					<fieldset className="form__fieldset">
						<InputRhf<FormValues>
							type="email"
							name="email"
							label="Email"
							register={register}
							rules={{
								required: { value: true, message: "Required" },
							}}
							error={errors.email}
						/>
						<InputRhf<FormValues>
							type="password"
							name="password"
							label="Password"
							register={register}
							rules={{
								required: { value: true, message: "Required" },
							}}
							error={errors.email}
						/>
					</fieldset>
					<div className="form__save">
						<Button type="submit" width="115px" disabled={isLoading}>
							Enter
						</Button>
						{isError && <ErrorMessage error={error} />}
					</div>
				</form>
			</div>
		</section>
	);
};

export default SignIn;
