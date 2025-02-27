import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./Header/Header";
import Head from "./AppSideBar/AppSideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DataProvider } from "./context-api/store";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "Mini-match job app",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased flex `}
      >
        <DataProvider>
      <SidebarProvider>
      <Head />
      <main className="flex-1 overflow-hidden">
      <Header />
        <SidebarTrigger />
        {children}
        <Toaster   />
      </main>
    </SidebarProvider>
    </DataProvider>
      </body>
    </html>
  );
}
