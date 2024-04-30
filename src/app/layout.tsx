"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider, useSelector } from "react-redux";
import { store } from "../redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Footer, Header, Loader } from "@/components";
import WishDrawer from "@/components/WishDrawer";
import Root from "@/Root";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <Root>{children}</Root>
          </Provider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
