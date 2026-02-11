"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { AuthProvider } from "@/context/AuthContext";
import { AuthSync } from "@/components/auth/AuthSync";
import { Toaster } from "sonner";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider refetchInterval={0} refetchOnWindowFocus={false}>
      <AuthProvider>
        <AuthSync />
        {children}
        <Toaster position="top-center" richColors />
      </AuthProvider>
    </SessionProvider>
  );
}