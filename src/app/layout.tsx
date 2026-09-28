import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import { GalleryVisibilityProvider } from "@/components/GalleryVisibility";
import { NavAppearanceProvider } from "@/components/NavAppearance";
import { ThemeProvider, THEME_INIT_SCRIPT } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thomas-roy.com"),
  title: "Thomas Roy — Photographe",
  description:
    "Portfolio de Thomas Roy, photographe documentaire et artistique. Reportages, photographie urbaine et paysages.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="h-full overflow-hidden bg-background text-foreground">
        <ThemeProvider>
          <GalleryVisibilityProvider>
            <NavAppearanceProvider>
              <Nav />
              {children}
            </NavAppearanceProvider>
          </GalleryVisibilityProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
