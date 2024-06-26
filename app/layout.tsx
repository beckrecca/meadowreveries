import type { Metadata } from "next";
import "./globals.css";
import Header from '@/app/ui/header'
import Footer from '@/app/ui/footer'


export const metadata: Metadata = {
  title: "Meadow Reveries",
  description: "Needle felting tutorials and handmade whimsies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  );
}
