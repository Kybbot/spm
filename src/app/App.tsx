import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { queryClientConfig } from "./config/queryClientConfig";

import { SignedInRoutes } from "./routes/SignedInRoutes";

const queryClient = new QueryClient(queryClientConfig);

export const App: FC = () => {
	return (
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<SignedInRoutes />
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</BrowserRouter>
	);
};
