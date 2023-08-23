import { FC } from "react";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/shared/ui/Button";
import { InputRhf } from "@/shared/ui/form/InputRhf";
import { Select, SelectItem } from "@/shared/ui/Select";

import { roleKeys, roleValues } from "@/shared/constants/selects";

type FormValues = {
	email: string;
	password: string;
	role: roleKeys;
};

const SignUp: FC = () => {
	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		defaultValues: {
			email: "",
			password: "",
			role: undefined,
		},
	});

	const onSubmit = (data: FormValues) => {
		console.log("data", data);
	};

	return (
		<section className="signUp">
			<div className="signUp__container">
				<h1 className="auth__title">Sign Up</h1>
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
						<label htmlFor="role" className="label">
							<span className="label__text">Role</span>
							<Controller
								name="role"
								control={control}
								rules={{ required: { value: true, message: "Required" } }}
								render={({ field }) => (
									<Select
										id="role"
										placeholder="Select Role"
										{...field}
										error={errors.role}
										value={field.value}
										onValueChange={field.onChange}
										customValues={roleValues}
									>
										{Object.entries(roleValues).map((value) => (
											<SelectItem key={value[0]} value={value[0]}>
												{value[1]}
											</SelectItem>
										))}
									</Select>
								)}
							/>
						</label>
					</fieldset>
					<div className="form__save">
						<Button type="submit" width="115px">
							Enter
						</Button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default SignUp;
