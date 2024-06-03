import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "Headless Blog",
  description: "Headless Blog",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
