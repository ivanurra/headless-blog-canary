import Header from "@/components/header";
import { Lato, Open_Sans } from "next/font/google";

import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-lato",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata = {
  title: "Headless Blog",
  description: "Headless Blog",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} ${openSans.variable} ${lato.variable}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
