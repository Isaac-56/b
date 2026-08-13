import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bemnet Seifu - Product Designer",
    template: "%s - Bemnet Seifu",
  },
  description:
    "Product designer working across UX, product strategy, delivery, and QA.",
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
          rel="preload"
          href="/audio/leberch-jazz-piano-578722.mp3"
          as="audio"
          type="audio/mpeg"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}