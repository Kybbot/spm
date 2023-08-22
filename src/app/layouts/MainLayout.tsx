import { FC } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "@/widgets/Header";

export const MainLayout: FC = () => {
	return (
		<>
			<div className="body__bg" />
			<Header />
			<main className="main">
				<div className="main__content">
					<Outlet />
				</div>
			</main>
		</>
	);
};
