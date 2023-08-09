import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "@src/components/DarkModeContext/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Styled Shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="dark:bg-slate-950 w-screen h-screen transition-all duration-500">
            <div className="absolute transition-all duration-500 dark:bg-gradient-radial bg-gradient-to-b dark:from-0% from-40% dark:from-violet-950 from-violet-400 via-70% dark:via-transparent via-transparent to-90% to-transparent w-full h-full top-[-50%]" />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
