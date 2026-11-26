import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const myriadPro = localFont({
  src: [
    {
      path: "./fonts/MyriadPro-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/MyriadPro-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/MyriadPro-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/MyriadPro-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-myriad-pro",
});

export const metadata: Metadata = {
  title: "City Center Doha | Leading Shopping Mall in Qatar",
  description:
    "City Center Doha, Qatar's premier mall, offers 200+ stores, dining, a cinema & ice rink. Your top destination for shopping, dining, and fun in West Bay.",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${myriadPro.className} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-page text-foreground">
        {children}
      </body>
    </html>
  );
}
