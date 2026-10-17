import type { Metadata, Viewport } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";
const serif = Playfair_Display({ subsets: ["latin"], weight: ["600", "800"], variable: "--font-serif" });
const sans = Jost({ subsets: ["latin"], variable: "--font-sans" });
export const metadata: Metadata = {
  title: "Chunnilal Mega Mart – Fashion Store, Nawada",
  description: "Sarees, lehengas, kurtis, suit pieces, men’s and kids’ wear at Jawahar Nagar, Nawada.",
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className={`${serif.variable} ${sans.variable} font-sans`}>{children}</body></html>);
}
