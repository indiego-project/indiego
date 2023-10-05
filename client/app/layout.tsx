import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex w-screen h-screen justify-center">
        <main className="relative w-full h-full min-w-mb_base max-w-mb_base">
          {children}
        </main>
      </body>
    </html>
  );
}
