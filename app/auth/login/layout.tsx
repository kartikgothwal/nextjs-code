import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "This is the login auth",
  description: "This is the description",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-red-600">login layout</header>
        {children}
        <footer className="bg-red-600">login layout</footer>
      </body>
    </html>
  );
}
