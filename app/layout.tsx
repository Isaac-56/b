import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bemnet Seifu — Product Designer",
    template: "%s — Bemnet Seifu",
  },
  description: "Product designer working across UX, product strategy, delivery, and QA.",
  metadataBase: new URL("https://bemnetseifu.com"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
