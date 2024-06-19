import Footer from "@/components/footer/footer";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

export const metadata = {
  title: "Headless Blog",
  description: "Headless Blog",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar title="Headless Blog" />
        {children}
        <Footer title="Headless Blog" />
      </body>
    </html>
  );
};

export default RootLayout;
