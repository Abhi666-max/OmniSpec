import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OmniSpec | Universal Product Intelligence",
  description: "Forging Raw Data into Commerce-Ready Assets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&family=Rajdhani:wght@300;400;500;600;700&family=Geist+Mono:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`antialiased bg-[#010B19] text-neutral-300 selection:bg-[#00D2FF]/20 selection:text-[#00D2FF] font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
