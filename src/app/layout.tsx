import type { Metadata } from "next";
import "./globals.css"; 
import Navbar from "@/Components/common/Navbar"; 
import Footer from "@/Components/Footer" 
import ScrollToTopBtn from "@/Components/common/ScrollToTopBtn";

export const metadata: Metadata = {
  title: "Umesh & Bros Construction",
  description: "Umesh & Bros Construction is a railway construction company that provides  construction services for customers ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children} 
        <Footer />
        <ScrollToTopBtn/>
      </body>
    </html>
  );
}
