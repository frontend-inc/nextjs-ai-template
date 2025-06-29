import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import Script from "next/script";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "AI Assistant",
  description: "Your AI coding assistant",
};

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white text-gray-900">
        <Header />
        <main className="min-h-screen flex flex-col pt-16 pb-24">
          <div className="flex-1">
            <div className="flex flex-col gap-20 max-w-5xl w-full mx-auto p-5">
              {children}
            </div>
          </div>
        </main>
      </body>
      <Script src="/frontend.js" strategy="afterInteractive" />
    </html>
  );
}
