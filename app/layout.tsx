import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "What's Cookin",
  description: "What's Cookin is a recipe management app that allows you to create, manage, and share recipes with your friends and family.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryProvider>
            <TooltipProvider>
              <Header />
              <main className="pt-16 min-h-screen bg-background text-foreground w-full">
                {children}
              </main>
            </TooltipProvider>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
