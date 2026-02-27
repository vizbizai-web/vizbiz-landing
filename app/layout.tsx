import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Visibility for Car Dealerships | Vizbiz",
  description: "Like AI Visibility* For Dealerships. *But it's 100% ethical (pinky promise). Discover your dealership's AI Visibility Intelligence (AVI) Score.",
  keywords: "AI visibility, car dealership, ChatGPT, AI search, automotive marketing, AVI score, AI reputation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
