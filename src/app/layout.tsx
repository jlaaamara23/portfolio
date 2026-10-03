import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jlaa Amara | Computer Science Portfolio",
  description:
    "Portfolio of Jlaa Amara — Computer Science intern focused on full-stack development, cloud-ready systems, and teaching.",
  authors: [{ name: "Jlaa Amara", url: "https://github.com/jlaaamara23" }],
  openGraph: {
    title: "Jlaa Amara | Computer Science Portfolio",
    description:
      "Full-stack and cloud-minded Computer Science portfolio featuring MedMe, RealTimeChat, and LogicSort.",
    type: "website",
  },
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Syne:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
