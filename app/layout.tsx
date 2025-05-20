import type { Metadata } from 'next';
import './global.css';

export const metadata: Metadata = {
  title: 'Chad Katz',
  description: "Chad Katz's Web Porfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
<link rel="icon" href="/frog2.png" type="image/png" />

      </head>
      <body>{children}</body>
    </html>
  );
}
