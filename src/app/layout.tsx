import "./globals.css";
import { ReactNode } from "react";

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
      <body>{children}</body>
    </html>
  );
}
