import { QueryClientConfig } from "@tanstack/react-query";

export const queryClientConfig: QueryClientConfig = {
	defaultOptions: {
		queries: {
			retry: false,
			refetchOnWindowFocus: import.meta.env.PROD,
		},
	},
};
