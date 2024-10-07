// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/Footer";
import ClientProvider from "../components/ClientProvider"; // Client-side session handling
import { Dentist } from "../lib/Data";

export const metadata: Metadata = {
  title: `${Dentist.title}`,
  description: `${Dentist.description}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        {/* Client-side session handling via a client component */}
        <ClientProvider>
          {children}
          <Footer />
        </ClientProvider>
      </body>
    </html>
  );
}
