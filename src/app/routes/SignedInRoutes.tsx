import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { MainLayout } from "../layouts/MainLayout";
import { AuthLayout } from "../layouts/AuthLayout";

import Home from "@/pages/Home";
import Advice from "@/pages/Advice";
import SignUp from "@/pages/SignUp";
import SignIn from "@/pages/SignIn";

export const SignedInRoutes: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<Home />} />
				<Route path="advice" element={<Advice />} />
			</Route>
			<Route path="/auth" element={<AuthLayout />}>
				<Route index element={<SignUp />} />
				<Route path="signIn" element={<SignIn />} />
			</Route>
		</Routes>
	);
};
