import type { Metadata } from "next";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Furry Tales | Cat Breeder Marketplace",
  description:
    "Find reputable cat breeders, compare available cats, and start transparent breeder inquiries.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
