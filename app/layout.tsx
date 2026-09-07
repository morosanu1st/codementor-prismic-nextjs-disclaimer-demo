import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prismic Disclaimer Demo | Codementor",
  description:
    "Minimal Next.js App Router demo: render a Prismic-style disclaimer field with mock CMS data.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
