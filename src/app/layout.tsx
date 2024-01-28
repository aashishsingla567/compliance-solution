import "@ca-site/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "@ca-site/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Complicance Solutions",
  description:
    "Complicance Solutions is a company that provides a wide range of services to help your business stay compliant with the law. We offer consulting, training, and software solutions for all of your needs. Our team of experts will work with you every step of the way to ensure that you are always up-to-date on the latest regulations and best practices in your industry. You can count on us to provide quality service at an affordable price!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
