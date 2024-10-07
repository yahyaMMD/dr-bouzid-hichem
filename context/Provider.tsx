'use client'
import React, { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

// Define the props type for the Provider component
interface ProviderProps {
  children: ReactNode;
  session: any; // You can replace `any` with the actual session type if available
}

export default function Provider({ children, session }: ProviderProps) {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
}
