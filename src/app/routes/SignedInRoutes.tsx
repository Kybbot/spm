import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { MainLayout } from "../layouts/MainLayout";

import Home from "@/pages/Home";
import Advice from "@/pages/Advice";

export const SignedInRoutes: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<Home />} />
				<Route path="advice" element={<Advice />} />
			</Route>
		</Routes>
	);
};
