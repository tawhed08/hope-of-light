
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import CustomCursor from "../components/CustomCursor";

export const metadata: Metadata = {
  title: {
    default: "Hope of Light | Making a Difference Together",
    template: "%s | Hope of Light",
  },
  description:
    "Hope of Light works to bring hope, care, and meaningful change to communities in need.",
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
        <CustomCursor />
      </body>
    </html>
  );
}
