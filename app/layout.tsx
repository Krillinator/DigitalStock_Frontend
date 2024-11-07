import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Link from "next/link"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "DigitalStock",
  description: "Buy IT-related Products",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="bg-slate-500 ">
          <ul className="text-4xl p-4 flex justify-evenly">
            <Link href={"/"} className="transition hover:text-blue-200">
              Home
            </Link>
            <Link href={"/about"} className="transition hover:text-blue-200">
              About
            </Link>
            <Link href={"/store"} className="transition hover:text-blue-200">
              Store
            </Link>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
