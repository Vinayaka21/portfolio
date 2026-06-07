import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vinayaka Prasad — Tech & Creative Professional",
  description:
    "Multidisciplinary tech professional combining full-stack development, cloud computing, AI-assisted workflows, and digital content creation. Based in Canada.",
  keywords: [
    "Vinayaka Prasad",
    "full-stack developer",
    "cloud computing",
    "web developer Canada",
    "AI workflow",
    "portfolio",
    "software developer",
    "React",
    "Next.js",
    "AWS",
  ],
  authors: [{ name: "Vinayaka Prasad" }],
  creator: "Vinayaka Prasad",
  openGraph: {
    type: "website",
    locale: "en_CA",
    title: "Vinayaka Prasad — Tech & Creative Professional",
    description:
      "Full-stack developer and cloud computing enthusiast building modern digital experiences.",
    siteName: "Vinayaka Prasad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinayaka Prasad — Tech & Creative Professional",
    description:
      "Full-stack developer and cloud computing enthusiast building modern digital experiences.",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
