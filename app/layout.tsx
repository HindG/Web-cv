import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hind Guessous' Portfolio",
  description: "Front-end web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
