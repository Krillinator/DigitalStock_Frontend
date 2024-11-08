import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Link from "next/link"
import CustomLink from "./_component/CustomLink"

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
        <nav className=" ">
          <ul className="text-4xl p-4 flex justify-evenly border-b-2 border-limedSpruce-200">
            <CustomLink href={"/"} text={"Home"} />
            <CustomLink href={"/about"} text={"About"} />
            <CustomLink href={"/store"} text={"Store"} />
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
