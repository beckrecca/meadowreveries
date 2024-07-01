import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';

export const metadata: Metadata = {
  title: "Meadow Reveries",
  description: "Needle felting tutorials and handmade whimsies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="mailerLite"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
                    .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
                    n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
                    (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
                    ml('account', '1003795');`,
          }}
        />
      </head>
      <body>
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  );
}
