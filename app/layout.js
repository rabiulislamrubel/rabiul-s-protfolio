import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rabiul's Protfolio",
  description: "A very passionate Front-end Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Nav/>
          {children}
          <Footer/>
        </body>
    </html>
  );
}
