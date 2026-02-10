import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import AuthenexChatWidget from "@/components/chat/AuthenexChatWidget";
import { AnalysisProvider } from "@/context/AnalysisContext";
import { LanguageProvider } from "@/context/LanguageContext";
// import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Authenex | AI-Powered Digital Forensics",
  description: "Government-grade digital content verification platform",
};

import { ThemeProvider } from "@/components/providers/ThemeProvider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
          <LanguageProvider>
            <Providers>
              <AnalysisProvider>
                {children}
                <AuthenexChatWidget />
              </AnalysisProvider>
            </Providers>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}