// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  // SignInButton,
  // SignedIn,
  // SignedOut,
  // UserButton
} from '@clerk/nextjs';
const inter = Inter({
  subsets: ["latin"],
})

export const metadata = {
  title: "Qen Meeting",
  description: "Zoom meeting",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
  <body
    className={`${inter.className} antialiased bg-gray-100 text-black`}
  >
    <main>
      {children}
    </main>
  </body>
</html>
</ClerkProvider>
  );
}



