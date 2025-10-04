import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";
import Link from "next/link";
import Image from "next/image";
import { Github, Globe, Linkedin } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Careerlyst",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`${inter.className} ` }>
          <ThemeProvider
            attribute="class"
            defaultTheme="systemp"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            <footer className="bg-muted/50 py-10 mx-auto">
              <div className="container mx-auto px-4 text-center text-gray-200 flex justify-center">
              <Link href="/">
                <Image
                  src={"/logo_careerlyst.png"}
                  alt="Careerlyst Logo"
                  width={200}
                  height={60}
                  className="h-12 py-1 w-auto object-contain"
                />
              </Link>
              </div>
              <div className=" mt-4 flex justify-evenly align-center">
                <Link href='https://github.com/aLok-1105'>
                  <Github />
                </Link>
                <Link href='https://www.linkedin.com/in/alok-ranjan-19998a228/'>
                <Linkedin />
                </Link>
                <Link href='https://alok-11.vercel.app/'>
                <Globe />
                </Link>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
