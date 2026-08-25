import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Waterhen Lake First Nation Website Concept",
  description: "A private website redesign concept for Waterhen Lake First Nation.",
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
