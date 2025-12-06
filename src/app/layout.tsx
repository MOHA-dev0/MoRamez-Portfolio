import { Poppins } from "next/font/google";
import "./globals.css";
import { VariantProvider } from "@/utils/hooks";

import { constructMetadata } from "@/utils";

import { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MoRamez Portfolio",
  description: "Professional Web Developer",
  metadataBase: new URL("http://localhost:3000"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head />
      <body className={poppins.className}>
        <VariantProvider>{children}</VariantProvider>
      </body>
    </html>
  );
}
