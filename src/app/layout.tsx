import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav/nav";
import { ReactScan } from "@/components/scan/scan";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* <ReactScan /> */}
        {/* <header className="header">
          <nav className="nav">
            <ul className="nav_container">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link href="/settings">Settings</Link>
              </li>
            </ul>
          </nav>
        </header> */}
        <main className="main_wrapper">{children}</main>
        {/* <footer className="footer">
          <p>Footer</p>
        </footer> */}
      </body>
    </html>
  );
}
