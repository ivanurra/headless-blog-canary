import Header from "@/components/header";

import "./globals.css";

export const metadata = {
  title: "Headless Blog",
  description: "Headless Blog",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
