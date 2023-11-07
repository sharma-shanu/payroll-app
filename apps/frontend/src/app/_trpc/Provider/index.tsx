"use client"
import { QueryClient, QueryClientProvider } from '@payroll/trpc/client';
import { httpBatchLink } from '@payroll/trpc/client';
import React, { useState } from 'react';
import { trpc } from '../Client';

export function TrpcProvider({children}:{ children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
  trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/api/trpc',

          // You can pass any HTTP headers you wish here
          async headers() {
            return {
            //   authorization: getAuthCookie(),
            };
          },
        }),
      ],
    }),
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>    
  );
}