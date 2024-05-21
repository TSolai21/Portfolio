import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Solaikumar",
  description: "I'm Frontend Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
