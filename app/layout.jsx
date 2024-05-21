import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Solaikumar",
  description:
    "I'm Solaikumar, a Front-End Developer with 2 years of experience, skilled in HTML, CSS, JavaScript, and proficient with React, Angular, and Next.js, dedicated to creating visually appealing and user-friendly websites.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/public/images/logo.png"
      />

      <body className={inter.className}>
        <div className="app bg-primary h-[100vh] w-full flex">
          <div className=" z-1 relative h-full">
            <Header />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
