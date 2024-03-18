import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
 
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShopLooks.com",
  description: "This is the best ecommerce store to buy clothing items",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="h-screen">{children}</section>
      </body>
    </html>
  );
}
