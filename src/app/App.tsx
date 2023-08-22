import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import { SignedInRoutes } from "./routes/SignedInRoutes";

export const App: FC = () => {
	return (
		<BrowserRouter>
			<SignedInRoutes />
		</BrowserRouter>
	);
};
