import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tobias Hub",
  description: "Disciplinando o corpo e a mente",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
