import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Icon } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Woodyork - Interior Design & Architecture",
  description: "We're welcoming you always",
  icons: {
    icon: "https://res.cloudinary.com/dec19xsoi/image/upload/v1747049232/W_kayu_zti4i7.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
