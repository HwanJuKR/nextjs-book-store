import { QueryClient } from "@tanstack/react-query";

const queryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      gcTime: 10 * 60 * 1000,
      retry: 3,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
};

export function createQueryClient() {
  return new QueryClient(queryClientConfig);
}

export const queryClient = createQueryClient();