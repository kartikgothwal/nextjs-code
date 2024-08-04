"use client";
import { Inter } from "next/font/google";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLink = [
    {
      name: "login",
      link: "/auth/login",
    },
    {
      name: "signup",
      link: "/auth/signup",
    },
  ];
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        {navLink &&
          navLink.map((item) => {
            return (
              <li key={item.name}>
                <Link
                  className={`${
                    pathname === item.link ? "text-red-600" : "text-slate-600"
                  }`}
                  href={item.link}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        {children}
      </body>
    </html>
  );
}
