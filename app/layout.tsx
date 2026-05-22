import type { Metadata } from "next";
import "./globals.css";
import { SITE_CONFIG } from "@/constants";

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  keywords: [
    "Onika Sileku",
    "DevOps Engineer",
    "IT Support",
    "Azure",
    "SQL",
    "MySQL",
    "Full Stack Developer",
    "Cape Town",
    "Data Support",
    "Cloud Engineering",
    "Junior DevOps",
    "Portfolio",
  ],
  authors: [{ name: "Onika Sileku" }],
  creator: "Onika Sileku",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
  },
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
      </head>
      <body className="bg-background text-text-primary antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
