import { FC } from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout: FC = () => {
	return (
		<>
			<div className="body__bg" />
			<main className="auth">
				<div className="auth__content">
					<div className="auth__container">
						<img src="/logo.png" alt="SPM" className="auth__logo" width={327} height={122} />
						<Outlet />
					</div>
				</div>
			</main>
		</>
	);
};
