import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Tobias Hub",
  description: "Disciplinando o corpo e a mente",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="pt">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
