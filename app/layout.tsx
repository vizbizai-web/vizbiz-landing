import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Visibility Intelligence for Car Dealerships | Vizbiz",
  description: "Discover your dealership's AI Visibility Intelligence (AVI) Score. See how AI systems like ChatGPT and Google AI recommend your competitors over you.",
  keywords: "AI visibility, car dealership, ChatGPT, AI search, automotive marketing, AVI score",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
