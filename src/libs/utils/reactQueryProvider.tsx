"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { client } from "@/libs/api-client";

import { BASE_URL } from "~/constants/baseUrl";

client.setConfig({
  baseUrl: BASE_URL,
});

export const ReactQueryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { staleTime: 60 * 1000 },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
